const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
  alert("Sabia que você ia aceitar! 💖");
});
