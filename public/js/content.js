/* functions */
function loadPaths() {
    console.log('loading');

    chrome.storage.sync.get(null, function (items) {
        // let fullUrl = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname;
        // let notionWorkspace = window.location.pathname.split('/')[1];

        // let notionLink = window.location.protocol + '//' + window.location.host + '/' + notionWorkspace;
        // let notionSpecifiedLink = window.location.protocol + '//' + window.location.host + '//' + notionWorkspace;
        
        console.log(items);
        for (let [key, value] of Object.entries(items)) {
            console.log(`${key}: ${value}`);
            // let testLink = notionSpecifiedLink + '/' + value;
            // if (testLink == fullUrl) {
            //     console.log(`Got ${key}: ${value}`);
            //     console.log('got em');
            //     window.history.pushState("test", '', key);
            // }
        }
    });
}

function replacePath(event) {
    console.log(event);
    let replacedPath = document.getElementById('path-to-replace-input').innerHTML;
    let newPath = document.getElementById('new-path-input').innerHTML;

    console.log(replacedPath);
    console.log(newPath);
}

function removePath() {

}
/* functions */

function init() {
    console.log('init');

    // functions
    loadPaths();

    // listeners
    chrome.runtime.onMessage.addListener(main);
}

init();

function main(message, sender, sendResponse) {
    if (message.code === 'gotUrl') {
        console.log(message.code);
    }

    if (message.code === 'addPath') {
        console.log(message.code);
        
        const replacedPath = message.replaced_path;
        const newPath = message.new_path;

        chrome.storage.sync.set({ "replaced_path": replacedPath, "new_path": newPath }, function () {
            console.log('replaced path: ' + replacedPath + ", new path: " + newPath);
        });
    }

    if (message.code === 'placeMockData') {
        const replacedPaths = ["replacedPath1","replacedPath2","replacedPath3","replacedPath4"]
        const newPaths = ["testValuePath1","testValuePath2","testValuePath3","testValuePath4"]

        for (let i = 0; i < replacedPaths.length; i++) {
            chrome.storage.sync.set({ "replaced_path": replacedPaths[i], "new_path": newPaths[i] }, function () {
                console.log('replaced path: ' + replacedPaths[i] + ", new path: " + newPaths[i]);
            });
        }
    }
}
