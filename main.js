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

localStorage.clear();
localStorage.setItem("length", "0");
if (!localStorage.getItem("length")) {
  localStorage.setItem("length", "0");
}
const theForm = document.querySelector(".theForm");
theForm.onsubmit = e => {
  const diaryEntry = document.querySelector(".txt-input").value;
  const timeOfEntry = new Date();
  const entryAndTime = JSON.stringify([
    diaryEntry,
    timeOfEntry.toLocaleDateString(),
    timeOfEntry.toLocaleTimeString()
  ]);
  console.log(parseInt(localStorage.getItem("length")));
  localStorage.setItem(`${localStorage.getItem("length")}`, entryAndTime);
  localStorage.setItem(
    "length",
    (parseInt(localStorage.getItem("length")) + 1).toString()
  );
  // theForm.submit();
  // window.close();
  for (i = 0; i < parseInt(localStorage.getItem("length")); i += 1) {
    const curEntry = localStorage.getItem(i.toString());
    console.log(JSON.parse(curEntry));
  }
  const modal = document.querySelector(".blackbg");
  modal.parentNode.removeChild(modal);
  // modal.style.display = "none";

  // document.body.querySelector.add("fade");
  document.body.theForm.add("fade");
  document.addEventListener("DOMContentLoaded", function(e) {
    document.body.theForm = "";
  });

  document.addEventListener("DOMContentLoaded", function(e) {
    document.body.theForm.remove("fade");
  });

  // document.querySelector(".blackbg").addEventListener("click", fadeOutEffect);

  return false;
};
