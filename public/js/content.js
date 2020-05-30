/* variables */
let urloc = location.href;
/* end variables */

/* functions */
function stateChanged(e) {
    console.log("state:", e);
}

function bodyClicked() {
    console.log("clicked")
    console.log("urlloc:", urloc);
    console.log("location:", location.href);
    if(urloc !== location.href) {
        console.log("url changed");
        replacePath();
        urloc = location.href;
    }
}

function replacePath() {
    console.log("replacepath")
    chrome.storage.sync.get(null, function (items) {
        let fullUrl = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname;
        let notionWorkspace = window.location.pathname.split('/')[1];
        let notionSpecifiedLink = window.location.protocol + '//' + window.location.host + '//' + notionWorkspace;

        for (let [key, value] of Object.entries(items)) {
            let testLink = notionSpecifiedLink + '/' + value;

            console.log("test link:", testLink);
            console.log("full url:", fullUrl);

            if (testLink == fullUrl) {
                console.log(`Switched ${key}: ${value}`);
                window.history.pushState(key, '', key);
            }
        }
    });
}

function loadPaths() {
    chrome.storage.sync.get(null, function (items) {
        let fullUrl = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname;
        let notionWorkspace = window.location.pathname.split('/')[1];
        let notionSpecifiedLink = window.location.protocol + '//' + window.location.host + '//' + notionWorkspace;
        
        document.onreadystatechange = function () {
            if(document.readyState === "complete") {
                for (let [key, value] of Object.entries(items)) {
                    let testLink = notionSpecifiedLink + '/' + value;

                    if (testLink == fullUrl) {
                        window.history.pushState(key, '', key);
                        console.log("pushed key")
                    }
                }
            }
        }
    });
}
/* end functions */

function init() {
    console.log("init");

    // functions
    loadPaths();

    // listeners
    chrome.runtime.onMessage.addListener(main);
    document.body.addEventListener('click', bodyClicked);
    document.addEventListener('readystatechange', stateChanged);
}

init();

function main(message, sender, sendResponse) {
    if (message.code === 'gotUrl') {
        // console.log(message.code);
    }

    if (message.code === 'addPath') {
        const key = message.new_path;
        const originalPath = message.replaced_path;
        
        let notionWorkspacePath = window.location.pathname.split('/')[2];

        if (notionWorkspacePath == originalPath) {
            window.history.pushState(key, '', key);
        }
    }
}
