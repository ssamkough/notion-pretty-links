window.addEventListener('load', function () {
    // init
    loadPopup();

    // listeners
    let replaceButton = document.getElementById('replace-btn');
    replaceButton.addEventListener('click', replacePath);

    let mockDataButton = document.getElementById('mock-data-btn');
    mockDataButton.addEventListener('click', placeMockData);
});

function loadPopup() {
    let params = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(params, sendLoadPopup);
}

function sendLoadPopup(tabs) {
    let url = tabs[0].url;
    chrome.tabs.sendMessage(tabs[0].id, { code: 'gotUrl', link: url });
}

function replacePath() {
    let params = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(params, sendReplacePath);
}

function sendReplacePath(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { code: 'addPath', replaced_path: 'testReplacedPath', new_path: 'testNewPath' });
}

function placeMockData() {
    let params = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(params, sendPlaceMockData);
}

function sendPlaceMockData(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { code: 'placeMockData' });
}