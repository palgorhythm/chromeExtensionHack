let background = document.createElement('div');
background.className = 'blackbg';
background.innerHTML = `
  <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@richardsjacob/DifferentAquaQuerylanguage?lite=true"></iframe>
  <iframe frameborder="0" width="100%" height="500px" style="padding-top: 20px" src="https://www.google.com/webhp?igu=1"></iframe>  

<div class="text-container">
    <form class="form">
      <input type="text" class="txt-input" placeholder="Hi, what\'s your name?"></input>
      <input type="submit" class="submit-txt"></input>
    </form>
  </div>`
document.body.parentNode.insertBefore(background, document.body);
