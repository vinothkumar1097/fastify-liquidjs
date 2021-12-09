//*********Managing Token/Cookies*************
//**************************************

// getToken
const getTokenOrRefresh = () => {    
    return new Promise(async (resolve) => {
        try {
            const speechToken = getCookie('speech-token');
            if (!speechToken || speechToken === undefined) {
                var data = await fetch(`${baseURL ? baseURL : ""}/api/get-speech-token`)
                var resp = await data.json();
                // console.log(resp)
                const token = resp.token;
                const region = resp.region;
                setCookie('speech-token', region + ':' + token, 9)

                console.log('Token fetched from back-end');
                resolve({ authToken: token, region: region });
            } else {
                console.log('Token fetched from cookie');
                const idx = speechToken.indexOf(':');
                resolve({ authToken: speechToken.slice(idx + 1), region: speechToken.slice(0, idx) });
            }
        } catch(err) {
            console.error(err);
            resolve({ authToken: null, region: null });
        }
    })
}

// Set Cookie
function setCookie(cookieName, cookieVal, cookieMaxAge) {
    var d = new Date();
    d.setTime(d.getTime() + (cookieMaxAge * 60 * 1000));     // for 1 minute expiry
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieVal + ";" + expires + ";path=/";
}

// Delete Cookie
function deleteCookie(cookieName){
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Get Cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}