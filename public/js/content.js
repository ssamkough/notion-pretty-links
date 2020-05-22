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
            // console.log(`${key}: ${value}`);
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
    console.log("main");
    if (message.code === 'gotUrl') {
        console.log(message.code);
    }

    if (message.code === 'addPath') {
        console.log(message.code);
        
        const key = message.new_path;
        let storageObj = {}
        storageObj[key] = message.replaced_path;

        chrome.storage.sync.set(storageObj, function () {
            console.log("Replacing " + storageObj[key] + " with " + key + ".");
        });
    }
}
