chrome.runtime.onInstalled.addListener(() => {
  useCtrlEnter = true;
  chrome.storage.sync.set({useCtrlEnter});
});


CONTEXT_MENU_ID = "myContextMenuId";
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'NicePass',
    contexts: ["editable"],
    id: CONTEXT_MENU_ID
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) return;
  chrome.tabs.sendMessage(tab.id, "nicepass", {frameId: info.frameId}, data => {});
});
