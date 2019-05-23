console.log('wheet');
// chrome.storage.sync.get('color', function(data) {
//   console.log(data.color);
// });

// chrome.runtime.onConnect.addListener(port => {
//   console.log('connected ', port);
//   chrome.runtime.onMessageExternal.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       console.log('nn');
//       // if (request.greeting == "hello")
//       //   sendResponse({farewell: "goodbye"});
//     });
// });
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "start" ) {
//       console.log('ya');
//     }
//   }
// );

// (function () {
//   chrome.storage.onChanged.addListener(function (changes,areaName) {
//       console.log("New item in storage",changes.visitedPages.newValue);
//   })
// })();



window.onload = function() {
  chrome.storage.sync.get(null, function(items) {
    const storageObj = items;
    const length = items.len;
    // append each of these to the dom.
    for(let i = 0; i < length; i+= 1){
      const curEntryArray = JSON.parse(storageObj[i]);
      const curEntryEl = document.createElement('div');
      curEntryEl.innerHTML = `
      <div class="full-entry">
        <div class="date-time">
          ${curEntryArray[1]} ${curEntryArray[2]}
        </div>
        <div class="entry-content">
          ${curEntryArray[0]}
        </div>
      </div>`;
      const contEl = document.querySelector('.entries-container');
      contEl.append(curEntryEl);
    }
  });
}

// function retrieve(success) {
//   console.log(chrome.tabs.getCurrent());
//   chrome.storage.get(function (data) {
//     console.log("The data stored is:" + JSON.stringify(data));
//   });
// }

// retrieve(true);