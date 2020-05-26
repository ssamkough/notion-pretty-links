// random functions used to try things
window.onload = function() {
    console.log("window.onload")
};

window.addEventListener("load", function(event) {
    console.log("load content loaded");
});

window.addEventListener('DOMContentLoaded', function(event) {
    console.log("window dom content loaded");
});

document.addEventListener('DOMContentLoaded', function(event) {
    console.log("dom content loaded");
});

HTMLDocument.prototype.ready = function () {
	return new Promise(function(resolve, reject) {
		if (document.readyState === 'complete') {
            resolve(document);
            console.log("drawing");
		} else {
			document.addEventListener('DOMContentLoaded', function() {
                resolve(document);
                console.log("snippet")
            });
        }
	});
}

document.onreadystatechange = function () {
    if(document.readyState === "complete") {
        console.log("onreadystate")
    }
}

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        console.log("test2")
    }    
}, 100);