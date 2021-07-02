//************************************ using NicePass button
window.addEventListener('load', function () {
  let inputs = document.getElementsByTagName('input');
  let passwords = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == 'password') {
      passwords.push(inputs[i])
    }
  }

  if (passwords.length > 0) {
    let field = passwords[0];
    let a = document.createElement('a');
    a.innerHTML = 'NicePass';
    a.className = "generate";
    a.href = '#';

    a.onclick = async function () {
      generateAndFillPassIn(field);
    };
    field.parentNode.append(a);
  }
});
//************************************************************************
//************************************************************************
//************************************ using Ctrl double Click
/*document.addEventListener("dblclick", function (event) {
 if (event.ctrlKey) {
 let field = event.target;
 if (field.tagName === "INPUT") {
 generateAndFillPassIn(field);
 }
 }
 });
 */
//************************************************************************
//************************************************************************
//************************************ using Ctrl Enter
document.addEventListener("keyup", function (event) {
  if (event.ctrlKey) {
    if (event.code === "Enter") {
      let field = event.target;
      if (field.tagName === "INPUT") {
        event.preventDefault();
        generateAndFillPassIn(field);
      }
    }
  }
});
//************************************************************************
//************************************************************************
//************************************ using context menu
var clickedEl = null;
document.addEventListener("contextmenu", function (event) {
  clickedEl = event.target;
}, true);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "nicepass") {
    generateAndFillPassIn(clickedEl);
  }
});
//************************************************************************
//************************************************************************
//************************************ generateAndFillPassIn Function
async function generateAndFillPassIn(field) {
  // parse hostname :
  // https://stackoverflow.com/questions/9752963/get-domain-name-without-subdomains-using-javascript
  let host = window.location.hostname;
  let password = prompt("Enter Your Pin (" + host + ")");

  // var p = new Promise(function (resolve, reject) {
  //   chrome.storage.sync.get("passwordHash", ({passwordHash}) => {
  //     resolve(passwordHash);
  //   });
  // });
  // const passwordHash = await p;


  let signature = host + password;
  let generatedPassword = await hashV1(signature);


  field.value = generatedPassword;
  console.log('filled password : ' + generatedPassword);
}



