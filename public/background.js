chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    console.log(url);
    chrome.tabs.sendMessage(tab.id, { message: "load" });
  });
}
