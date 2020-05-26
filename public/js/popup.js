window.addEventListener('load', function () {
    // init
    loadPopup();

    // listeners
    let replaceButton = document.getElementById('replace-btn');
    replaceButton.addEventListener('click', replacePath);

    // let mockDataButton = document.getElementById('mock-data-btn');
    // mockDataButton.addEventListener('click', placeMockData);

    let navLinkReplacer = document.getElementById('nav-link-replacer');
    navLinkReplacer.addEventListener('click', switchToReplacerView);

    let navLinkList = document.getElementById('nav-link-list');
    navLinkList.addEventListener('click', switchToListView);
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
    let replacedPath = document.getElementById('path-to-replace-input').value;
    let newPath = document.getElementById('new-path-input').value;

    chrome.tabs.sendMessage(tabs[0].id, { code: 'addPath', replaced_path: replacedPath, new_path: newPath });

    replacedPath = '';
    newPath = '';
}

function switchToListView() {
    let listPage = document.getElementById('list-page');
    let replacerPage = document.getElementById('replacer-page');

    listPage.style.display = "inline";
    replacerPage.style.display = "none";
}

function switchToReplacerView() {
    let listPage = document.getElementById('list-page');
    let replacerPage = document.getElementById('replacer-page');

    listPage.style.display = "none";
    replacerPage.style.display = "inline";
}