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
-   [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState)

## Todo ☑️

-   Update list without having to refresh for delete (make sure update works)
-   Fix the ugly code in PathItem for object
-   Fix issue where user tries to refresh though because it might not reroute it to the same one
-   If I add one to the list and it's for the path a user is on, I need to change it on sight
-   When users are switching around from notion page to notion page, I need to detect when a url changes to be able to update it if it has a key
-   Fix styles, especially for PathItem
-   Make a copy current path (copies path of current page and adds to replaced path)
-   Make a clear button (clears all items)
-   Write a clear diagram of how this works
