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
