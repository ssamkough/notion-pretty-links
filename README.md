# Notion Pretty Links 💅

Turning Notion's random path blarb to actual readable characters.

## How it Works 🩰

1. Grab the path that you want to replace.
2. Open up the extension.
3. Paste the path in the in the "Path to Replace" input box.
4. Type the path you want to see instead of it in "New Path".
5. Click the submit button and you're set. Remove it by finding it in the list of custom paths and click x.

## Architecture 📐

### Storage 💾

-   To store the paths I utilize Google Chrome's [chrome.storage](https://developer.chrome.com/extensions/storage).

## Technologies 🧺

-   [React](https://reactjs.org/)
-   [React Bootstrap](https://react-bootstrap.github.io/)

## Resources 🙏

-   [Building a Chrome Extension Using React](https://medium.com/@gilfink/building-a-chrome-extension-using-react-c5bfe45aaf36)
-   [Build a Chrome Extension in React (Full Project Download)](https://www.youtube.com/watch?v=4x0lQu1TOCQ)
-   [How can I get the URL of the current tab from a Google Chrome extension?](https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension)
-   [Get URL and URL Parts in JavaScript](https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/)
-   [How do I modify the URL without reloading the page?](https://stackoverflow.com/questions/824349/how-do-i-modify-the-url-without-reloading-the-page)
-   [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
-   [Get all keys from Chrome Storage](https://stackoverflow.com/questions/18150774/get-all-keys-from-chrome-storage)
-   [chrome.storage](https://developer.chrome.com/extensions/storage)
-   [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

## Todo ☑️

-   Fix error of root page not loading when opening popup
-   Replace a path (put old path and new path)
-   Be able to add items to list
-   Be able to remove items from list (need to figure out how to add listeners to x button)
