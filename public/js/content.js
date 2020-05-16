function init() {
  let fullUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    "/" +
    window.location.pathname;
  console.log(fullUrl);

  let notionWorkspace = window.location.pathname.split("/")[1];
  let notionLink =
    window.location.protocol +
    "//" +
    window.location.host +
    "/" +
    notionWorkspace;

  let notionSpecifiedLink =
    window.location.protocol +
    "//" +
    window.location.host +
    "//" +
    notionWorkspace;

  let testLink =
    notionSpecifiedLink + "/" + "Sandbox-af9c4fcd132f4fedbf80c30ab197023d";

  if (testLink == fullUrl) {
    console.log("got em");
  }

  chrome.runtime.onMessage.addListener(main);
}

init();

function main(message, sender, sendResponse) {
  if (message.code === "gotUrl") {
    console.log(message.url);
  }
}
