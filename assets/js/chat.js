// Element Initialization
const lang_container = $('.langDropdown');;
const lang_input = $('#lang');
const mic_elem = $('.micInput');
const keyboard_elem = $('.kbInput');
const msg_input = $('#chatmsg');
const helper_elem = $('.helperText');
const msg_elem = $('.msgText');

const response_container = $('.respContainer');
const SERVICE_KEY = "737d2a79ba3d4051958be64e6b4d702b";
const SERVICE_REGION = "eastus";
const speechsdk = window.SpeechSDK;

// Initialize Semantic UI
lang_container.dropdown({
    clearable: false
});

// Get Microphone permissions from user
const getMicrophoneAccess = async () => {
    return new Promise(resolve => {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(function(stream) {
//            console.log(stream)
            console.log('You let me use your mic!')
            resolve(true);
          })
          .catch(function(err) {
            console.log(err)
            console.log('No mic for you!')
            resolve(false);
          });
    })
}

// Show/Hide element
const showhideElem = (showelem, hideelem) => {
    $(showelem).removeClass('d-none').addClass('d-block');
    $(hideelem).removeClass('d-block').addClass('d-none');
}


const translateSpeech = (targetLang='en') => {
    return new Promise(resolve => {
        // configure translation
        const translationConfig = speechsdk.SpeechTranslationConfig.fromSubscription(SERVICE_KEY, SERVICE_REGION)
        translationConfig.speechRecognitionLanguage = lang_input.val()
        translationConfig.addTargetLanguage('en')
//      console.log('Target languages', translationConfig.targetLanguages)
            
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.TranslationRecognizer(translationConfig, audioConfig);
//        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
        
        let resp;
        recognizer.recognizeOnceAsync(result => {
            console.log(JSON.stringify(result.translations, null, 4))
            console.log(result.translations['privMap']['privValues'][0])
//            console.log(speechsdk.ResultReason)
//            console.log(result.reason)
            if (result.reason === speechsdk.ResultReason.TranslatedSpeech) {
                resp = {status: 'success', msg: result.translations['privMap']['privValues'][0]}
            } else {
                resp = {status: 'failed', msg: 'Speech was cancelled or could not be recognized. Ensure your microphone is working properly.'}
            }
            console.log('spoken input', result.text)
            console.log('translation output',resp['msg'])
            resolve(resp);
//            response_container.html(displayText).css({'color': "yellow"});
        });
    })
}


mic_elem.on('click', async (e) => {
    e.preventDefault();
        
    try {
        // Checking microphone
        if (!await getMicrophoneAccess()) {
            throw new Error('Unable to access your microphone. Please try using Keyboard option');
        }
        
        // changing active css
        keyboard_elem.removeClass('icoActive')
        mic_elem.addClass('icoActive')
        showhideElem(helper_elem, msg_elem)
        
        // speech detection
        if (!lang_input.val()) {
            throw new Error('Please select language');
        }
        
        // Speech translation
        var detectedText = await translateSpeech()
        console.log(detectedText);
        
        // Speech response (https://github.com/Azure-Samples/cognitive-services-speech-sdk/blob/master/quickstart/javascript/node/text-to-speech/index.js)
        var voices = {"en": "en-IN-PrabhatNeural"}
        const speechConfig = speechsdk.SpeechConfig.fromSubscription(SERVICE_KEY, SERVICE_REGION);
        speechConfig.speechSynthesisLanguage = "en";
        speechConfig.speechSynthesisVoiceName = voices['en'];
        var audioConfig = speechsdk.AudioConfig.fromDefaultSpeakerOutput();
        var synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);
        await synthesizer.speakTextAsync(
            detectedText['msg'],
            result => {
                if (result) {
                    console.log(result)
                    synthesizer.close();
                    response_container.html(detectedText['msg']).css({'color': "yellow"});
                    return result.audioData;
                }
            },
            error => {
                console.log(error);
                synthesizer.close();
            });
//        synthesizer.speakTextAsync(displayText)
//            const speak = synthesizer.speakTextAsync(displayText).get()
//            if (speak.reason != speech_sdk.ResultReason.SynthesizingAudioCompleted){
//                console.log(speak.reason)
//            }
    }
    catch (err) {
        response_container.html(err.message).css({'color': "red"});
    }
})

keyboard_elem.on('click', (e) => {
    e.preventDefault();
    mic_elem.removeClass('icoActive')
    keyboard_elem.addClass('icoActive')
    showhideElem(msg_elem, helper_elem)
})

msg_input.keyup(function(e){
    if(e.keyCode == 13)
    {
        alert($(this).val() ? $(this).val() : "Please enter some text")
//        $(this).trigger("enterKey");
    }
});