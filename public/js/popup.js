window.addEventListener('load', function () {
    // init
    loadPopup;

    // listeners
    let replaceButton = document.getElementById('replace-btn');
    // replaceButton.addEventListener('click', replacePath);
});

function loadPopup() {
    let params = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(params, getUrl);
}

function getUrl(tabs) {
    let url = tabs[0].url;
    chrome.tabs.sendMessage(tabs[0].id, { code: 'gotUrl', link: url });
}

function replacePath() {
    chrome.tabs.sendMessage(tabs[0].id, { code: 'test' });
}
