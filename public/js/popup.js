window.addEventListener("load", loadPopup);

function loadPopup() {
  let params = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(params, getUrl);
}

function getUrl(tabs) {
  let url = tabs[0].url;
  chrome.tabs.sendMessage(tabs[0].id, { code: "gotUrl", link: url });
}
