let count = 0;


function toggleMode() {
  document.body.classList.toggle("dark");
}

function increaseCounter() {
  count++;
  document.getElementById("count").innerText = count;
}


function scrollDown() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
function openPopup(text) {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
  popup.innerText = text;

  setTimeout(() => {
    popup.style.display = "none";
  }, 1500);
}