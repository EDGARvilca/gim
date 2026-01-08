const parts = document.querySelectorAll(".heart-part");
const messageText = document.querySelector(".message__text");

const setMessage = (part) => {
  const message = part.getAttribute("data-message");
  if (!messageText || !message) {
    return;
  }

  parts.forEach((item) => item.classList.remove("heart-part--active"));
  part.classList.add("heart-part--active");
  messageText.textContent = message;
};

parts.forEach((part) => {
  part.addEventListener("click", () => setMessage(part));
  part.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setMessage(part);
    }
  });
});
