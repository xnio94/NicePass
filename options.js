
let ctrlEnter = document.getElementById("ctrlEnter");
let ctrlDblclick = document.getElementById("ctrlDblclick");
let nicePassLink = document.getElementById("nicePassLink");

chrome.storage.sync.get("useCtrlEnter", ({useCtrlEnter}) => {
  ctrlEnter.checked = useCtrlEnter;
});
chrome.storage.sync.get("useCtrlDblclick", ({useCtrlDblclick}) => {
  ctrlDblclick.checked = useCtrlDblclick;
});
chrome.storage.sync.get("useNicePassLink", ({useNicePassLink}) => {
  nicePassLink.checked = useNicePassLink;
});


ctrlEnter.addEventListener('change', (event) => {
  let useCtrlEnter = event.currentTarget.checked;
  chrome.storage.sync.set({useCtrlEnter});

});
ctrlDblclick.addEventListener('change', (event) => {
  let useCtrlDblclick = event.currentTarget.checked;
  chrome.storage.sync.set({useCtrlDblclick});
});
nicePassLink.addEventListener('change', (event) => {
  let useNicePassLink = event.currentTarget.checked;
  chrome.storage.sync.set({useNicePassLink});
});
