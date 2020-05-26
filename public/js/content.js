/* functions */
function urlChange() {
    console.log("url is changed")
}

function loadPaths() {
    chrome.storage.sync.get(null, function (items) {
        let fullUrl = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname;
        let notionWorkspace = window.location.pathname.split('/')[1];
        let notionSpecifiedLink = window.location.protocol + '//' + window.location.host + '//' + notionWorkspace;
        
        // console.log(items);
        document.onreadystatechange = function () {
            if(document.readyState === "complete") {
                for (let [key, value] of Object.entries(items)) {
                    let testLink = notionSpecifiedLink + '/' + value;
                    
                    if (testLink == fullUrl) {
                        // console.log(`Switched ${key}: ${value}`);
                        window.history.pushState(key, '', key);
                    }
                }
            }
        }
    });
}

function replacePath(event) {
    let replacedPath = document.getElementById('path-to-replace-input').innerHTML;
    let newPath = document.getElementById('new-path-input').innerHTML;
}

function removePath() {}
/* end functions */

function init() {
    // functions
    loadPaths();

    // listeners
    chrome.runtime.onMessage.addListener(main);
    // window.onhashchange = urlChange;
    // window.addEventListener('hashchange', urlChange, false);
    window.addEventListener('popstate', urlChange);
    window.addEventListener('popstate', function (event) {
        // Log the state data to the console
        console.log(event.state);
    });
}

init();

function main(message, sender, sendResponse) {
    if (message.code === 'gotUrl') {
        // console.log(message.code);
    }

    if (message.code === 'addPath') {
        // console.log(message.code);
        
        const key = message.new_path;
        let storageObj = {}
        storageObj[key] = message.replaced_path;

        chrome.storage.sync.set(storageObj, function () {
            // console.log("Replacing " + storageObj[key] + " with " + key + ".");
        });
    }
}
