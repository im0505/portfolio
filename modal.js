const modal = document.querySelector(".modal");
const modalBtns = document.querySelectorAll(".open-modal")[0];
const modalContents = document.querySelectorAll(".modal-content");

modalBtns.addEventListener("click", openModal);

window.addEventListener("click", outsideClick);

let current = null;

function openModal(e) {
  if (current) {
    current.style.display = "none";
  }
  if (e.target.id) {
    modal.style.display = "block";
    current = modalContents[Number(e.target.id) - 1];
    modalContents[Number(e.target.id) - 1].style.display = "flex";
  }
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.animate = "open-modal alternative";
  }
}

const bjapp = document.getElementById("bjapp");
const videoapp = document.getElementById("videoapp");
const chatcode = document.getElementById("chatcode");
const denycode = document.getElementById("denycode");

bjapp.addEventListener("click", () => {
  window.open("http://blackjack.0505.tk");
});
videoapp.addEventListener("click", () => {
  window.open("http://www.0505.tk");
});
chatcode.addEventListener("click", () => {
  window.open("https://github.com/im0505/knu-chatbot");
});
denycode.addEventListener("click", () => {
  window.open("https://github.com/im0505/DenyNoNo");
});
