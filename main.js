let background = document.createElement("div");
background.className = "content-page-popup fade";
background.innerHTML = `
<div class="introspect-title">introspect</div>
<div class="text-container">
  <form class="theForm">
    <input type="text" class="txt-input" autofocus="autofocus" placeholder="how are you feeling ?"></input>
    <input type="submit" value="submit" class="submit-txt"></input>
  </form>
</div>`;
document.body.parentNode.insertBefore(background, document.body);
const theForm = document.querySelector(".theForm");

background.classList.remove("fade");

chrome.storage.sync.get(["len"], function(result) {
  const curLen = result.len;
  if (!curLen) {
    chrome.storage.sync.set({ len: 0 }, function() {
      console.log("len is set to " + 0);
    });
  }
});
const monthNames = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec"
];

theForm.onsubmit = e => {
  e.preventDefault();
  const diaryEntry = document.querySelector(".txt-input").value;
  const timeOfEntry = new Date();
  const entryAndTime = JSON.stringify([
    diaryEntry,
    monthNames[timeOfEntry.getMonth()] +
      " " +
      timeOfEntry.getDate() +
      " " +
      timeOfEntry,
    timeOfEntry.getHours() + ":" + timeOfEntry.getMinutes()
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
  const submitButton = document.querySelector(".submit-txt");
  submitButton.style.padding = "50px";
  setTimeout(() => {
    const modal = document.querySelector(".content-page-popup");
    modal.parentNode.removeChild(modal);
  }, 1000);
};
