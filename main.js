let background = document.createElement("div");
background.className = "blackbg";
background.innerHTML = `
  <div class="text-container">
    <form class="theForm">
      <input type="text" class="txt-input" placeholder="Hi, what\'s your name?"></input>
      <input type="submit" class="submit-txt"></input>
    </form>
  </div>`;
document.body.parentNode.insertBefore(background, document.body);
const theForm = document.querySelector(".theForm");

chrome.storage.sync.get(["len"], function(result) {
  const curLen = result.len;
  if (!curLen) {
    chrome.storage.sync.set({ len: 0 }, function() {
      console.log("len is set to" + 0);
    });
  }
});

theForm.onsubmit = e => {
  const diaryEntry = document.querySelector(".txt-input").value;
  const timeOfEntry = new Date();
  const entryAndTime = JSON.stringify([
    diaryEntry,
    timeOfEntry.toLocaleDateString(),
    timeOfEntry.toLocaleTimeString()
  ]);
  // console.log(parseInt(localStorage.getItem('length')));
  chrome.storage.sync.get(["len"], function(result) {
    const curLen = result.len;
    chrome.storage.sync.set({ [curLen]: entryAndTime }, function() {
      console.log("current KEY AND entry is " + curLen + " " + entryAndTime);
      chrome.storage.sync.set({ len: curLen + 1 }, function() {
        // console.log(curLen + 1);
      });
    });
  });

  const modal = document.querySelector(".blackbg");
  modal.parentNode.removeChild(modal);
  // modal.style.display = "none";

  // document.body.querySelector.add("fade");
  document.body.theForm.add("fade");

  return false;
};

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.theForm = "";
  document.body.theForm.remove("fade");
});

// function popup() {
//   chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// }
// popup();
// document.addEventListener("DOMContentLoaded", popup);

// chrome.storage.sync.set({mykey: 'pizza'}, function() {
//   console.log('Value is set to ' + 'pizza');
// });

// chrome.storage.sync.get(['mykey'], function(result) {
//   console.log('Value currently is ' + result.key);
// });
