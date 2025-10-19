const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("modalOverlay");
const closeBtn = document.querySelector(".close");

menuButton.onclick = function () {
  overlay.classList.add("show");
};

closeBtn.onclick = function () {
  overlay.classList.remove("show");
};

window.onclick = function (event) {
  if (event.target === overlay) {
    overlay.classList.remove("show");
  }
};
