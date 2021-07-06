//add "options_page": "options.html", to manifest.json

let ctrlEnter = document.getElementById("ctrlEnter");
let ctrlDblclick = document.getElementById("ctrlDblclick");

chrome.storage.sync.get("useCtrlEnter", ({useCtrlEnter}) => {
  ctrlEnter.checked = useCtrlEnter;
});
chrome.storage.sync.get("useCtrlDblclick", ({useCtrlDblclick}) => {
  ctrlDblclick.checked = useCtrlDblclick;

});


ctrlEnter.addEventListener('change', (event) => {
  useCtrlEnter = event.currentTarget.checked;
  chrome.storage.sync.set({useCtrlEnter});

});
ctrlDblclick.addEventListener('change', (event) => {
  useCtrlDblclick = event.currentTarget.checked;
  chrome.storage.sync.set({useCtrlDblclick});
});
/*



 function constructOptions(buttonColors) {
 chrome.storage.sync.get("color", (data) => {
 let currentColor = data.color;
 // For each color we were provided…
 for (let buttonColor of buttonColors) {
 // …create a button with that color…
 let button = document.createElement("button");
 button.dataset.color = buttonColor;
 button.style.backgroundColor = buttonColor;

 // …mark the currently selected color…
 if (buttonColor === currentColor) {
 button.classList.add(selectedClassName);
 }

 // …and register a listener for when that button is clicked
 button.addEventListener("click", handleButtonClick);
 page.appendChild(button);
 }
 });
 }
 */

