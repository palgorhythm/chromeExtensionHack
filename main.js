let background = document.createElement('div');
background.className = 'blackbg';
background.innerHTML = `
  <div class="text-container">
    <form class="form">
      <input type="text" class="txt-input" placeholder="Hi, what\'s your name?"></input>
      <input type="submit" class="submit-txt"></input>
    </form>
  </div>`
document.body.parentNode.insertBefore(background, document.body);
