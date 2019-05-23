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