let host = document.getElementById('host');
let password = document.getElementById('password');
let generate = document.getElementById("generate");

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  var tab = tabs[0];
  var url = new URL(tab.url);
  var domain = url.hostname;
  host.value = domain;
});


password.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    generate.click();
  }
});


generate.addEventListener("click", async () => {
  let signature = host.value + password.value;
  let generatedPassword = await hashV1(signature);

  function copy(text) {
    let input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  }

  copy(generatedPassword);
  document.getElementById("myModal").style.display = "block";
  setTimeout(function () {
    window.close();
  }, 800);
});


// let save = document.getElementById("save");
// let masterPassword = document.getElementById("password");
//
//
// save.addEventListener("click", async () => {
//   /* in dart :
//    String masterPassword = "anas";
//    var msgUint8 = utf8.encode(masterPassword); //js: msgUint8 = new
//    TextEncoder().encode(masterPassword); var bytes = sha256.convert(msgUint8).bytes;//js:  bytes
// = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', msgUint8))); var passwordHash
// = bytes.sublist(0,5).map((element) => element.toRadixString(36)).toList().join(); //js:
// passwordHash = hashArray.slice(0, 5).map(b => b.toString(36)).join(''); print('pass =
// '+passwordHash); */ let msgUint8 = new TextEncoder().encode(masterPassword.value); let
// hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); let hashArray = Array.from(new
// Uint8Array(hashBuffer)); let passwordHash = hashArray.slice(0, 5).map(b =>
// b.toString(36)).join(''); chrome.storage.sync.set({passwordHash}); console.log("saved");
// alert('Hey'); window.close(); });