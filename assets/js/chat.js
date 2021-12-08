// Element Initialization
const lang_container = $('.langDropdown');;
const lang_input = $('#lang');
const lang_input_text = lang_input.find('.text');

const mic_elem = $('.micInput');
const keyboard_elem = $('.kbInput');
const msg_input = $('#chatmsg');
const helper_elem = $('.helperText');
const msg_elem = $('.msgText');
const response_container = $('.respContainer');

// SPEECH Initializations
const SERVICE_KEY = "737d2a79ba3d4051958be64e6b4d702b";
const SERVICE_REGION = "eastus";
const baseURL = 'http://localhost:5000';
const speechsdk = window.SpeechSDK;
const SPEECH_TRANSLATION_TARGET_LANG = 'en';

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

// Speech to Text API
const speech2text = () => {
    return new Promise(async (resolve) => {
        // REF : https://github.com/Azure-Samples/AzureSpeechReactSample        
        
        const tokenObj = await getTokenOrRefresh();
        if (!tokenObj.authToken) {
            resolve({issuccess: false, msg: 'Unable to access Speech Service.'})
        }
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region)
        // const speechConfig = speechsdk.SpeechConfig.fromSubscription(SERVICE_KEY, SERVICE_REGION)
        speechConfig.speechRecognitionLanguage = lang_input.val()
            
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
        
        let resp;
        recognizer.recognizeOnceAsync(result => {
            // console.log(JSON.stringify(result, null, 4))
            console.log(speechsdk.ResultReason[result.reason]);
            if (result.reason === speechsdk.ResultReason.RecognizedSpeech) {
                resp = {issuccess: true, msg: result.text}
            } else {
                console.error('translateSpeech :: ',JSON.stringify(result, null, 4));
                resp = {issuccess: false, msg: 'Speech was cancelled or could not be recognized. Ensure your microphone is working properly.'}
            }
            console.log('spoken input', result.text)
            console.log('translation output',resp['msg'])
            resolve(resp);
        });
    })
}

// Speech Translation API
const speechTranslation = () => {
    return new Promise(async (resolve) => {
        
        const tokenObj = await getTokenOrRefresh();
        if (!tokenObj.authToken) {
            resolve({issuccess: false, msg: 'Unable to access Speech Service.'})
        }
        const translationConfig = speechsdk.SpeechTranslationConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region)
        // const translationConfig = speechsdk.SpeechTranslationConfig.fromSubscription(SERVICE_KEY, SERVICE_REGION)
        translationConfig.speechRecognitionLanguage = lang_input.val()
        translationConfig.addTargetLanguage(SPEECH_TRANSLATION_TARGET_LANG)
        // console.log('Target languages', translationConfig.targetLanguages)
            
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.TranslationRecognizer(translationConfig, audioConfig);
        
        let resp;
        recognizer.recognizeOnceAsync(result => {
            // console.log(JSON.stringify(result.translations, null, 4))
            console.log(speechsdk.ResultReason[result.reason]);
            if (result.reason === speechsdk.ResultReason.TranslatedSpeech) {
                resp = {issuccess: true, msg: result.translations['privMap']['privValues'][0]}
            } else {
                console.error('translateSpeech :: ',JSON.stringify(result, null, 4));
                resp = {issuccess: false, msg: 'Speech was cancelled or could not be recognized. Ensure your microphone is working properly.'}
            }
            console.log('spoken input', result.text)
            console.log('translation output',resp['msg'])
            resolve(resp);
        });
    })
}

// Text to Speech API
const text2speech = (spokenInput, hideProcessingElem=false) => {
    return new Promise(async (resolve) => {
        if (!spokenInput) {
            throw new Error("Unable to translate Speech.")
        }
        /*
        REFERENCE URLs : 
        https://github.com/Azure-Samples/cognitive-services-speech-sdk/blob/master/quickstart/javascript/node/text-to-speech/index.js
        https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#speech-to-text
        */
        const voices = {
            "en-US": "en-US-BrandonNeural",
            "ta-IN": "ta-IN-ValluvarNeural",            
            "fr-FR": "fr-FR-HenriNeural",            
        }
        const tokenObj = await getTokenOrRefresh();
        if (!tokenObj.authToken) {
            resolve({issuccess: false, msg: 'Unable to access Speech Service.'})
        }
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region)
        // const speechConfig = speechsdk.SpeechConfig.fromSubscription(SERVICE_KEY, SERVICE_REGION);
        speechConfig.speechSynthesisLanguage = lang_input.val();
        speechConfig.speechSynthesisVoiceName = voices[lang_input.val()];
        const audioConfig = speechsdk.AudioConfig.fromDefaultSpeakerOutput();
        const synthesizer = new speechsdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            spokenInput, 
            result => {
                console.log(speechsdk.ResultReason[result.reason]);
                if (hideProcessingElem) {
                    response_container.removeClass('listening processing');
                }
                synthesizer.close();
                if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
                    resolve({issuccess: true, msg: result.audioData})
                } else {
                    console.error('translateSpeech :: ',JSON.stringify(result, null, 4));
                    resolve({issuccess: false, msg: `speakText :: unable to speak input :: ${speechsdk.ResultReason[result.reason]}`})
                }
            },
            error => {
                console.error('speakText :: ',error);
                synthesizer.close();
                resolve({issuccess: false, msg: error})
        });
    })
}

// Handle Speech recognition on mic press
mic_elem.on('click', async (e) => {
    e.preventDefault();
    
    mic_elem.css({'cursor': 'not-allowed', "opacity": 0.4});
    response_container.html('');    
    
    try {
        // Checking microphone
        if (!await getMicrophoneAccess()) {
            throw new Error('Unable to access your microphone. Please try using Keyboard option');
        }
        
        // changing active css
        keyboard_elem.removeClass('icoActive')
        mic_elem.addClass('icoActive')
        showhideElem(helper_elem, msg_elem)
        
        // speech language check
        if (!lang_input.val()) {
            throw new Error('Please select language');
        }
        
        // Speech to Text
        response_container.removeClass('processing').addClass('listening');
        var detected_text = await speech2text();
        response_container.removeClass('listening').addClass('processing');
        console.log(detected_text);
        if (!detected_text['issuccess']) {
            throw new Error(detected_text['msg']);
        }
        
        // Text to Speech
        var speak_text = await text2speech(detected_text['msg'], true);
        console.log(speak_text);
        if (!speak_text['issuccess']) {
            throw new Error(speak_text['msg']);
        }
        response_container.html(detected_text['msg']).css({'color': "yellow"});
    }
    catch (err) {
        console.error(err);
        response_container.removeClass('listening processing');
        response_container.html(err.message).css({'color': "red"});
    }
    finally {
        mic_elem.css({'cursor': 'pointer', "opacity": 1});
    }
})

// show keyboard input
keyboard_elem.on('click', async (e) => {
    e.preventDefault();
    mic_elem.removeClass('icoActive')
    keyboard_elem.addClass('icoActive')
    showhideElem(msg_elem, helper_elem)
})

// Handle Keyboard input
msg_input.keyup(function(e){
    if(e.keyCode == 13)
    {
        alert($(this).val() ? $(this).val() : "Please enter some text")
//        $(this).trigger("enterKey");
    }
});