const paragraph = document.querySelector(".message");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const input = document.querySelector(".input");
  const value = input.value;
  paragraph.textContent = value;
  input.value = "";
});
