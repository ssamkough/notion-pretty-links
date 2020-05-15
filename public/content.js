console.log("content");

chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  main();
});

function main() {
  console.log("main");
}
