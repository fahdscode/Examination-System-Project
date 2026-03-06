
import * as Regex from "./reg.js"


const markedToggleBtn = document.getElementById("markedToggleBtn");
const markedPanel = document.getElementById("markedPanel");
const answerInputs = document.querySelectorAll(".exam-option-input");

if (markedToggleBtn && markedPanel) {
  markedToggleBtn.addEventListener("click", () => {
    const isHidden = markedPanel.classList.toggle("is-hidden");
    markedToggleBtn.classList.toggle("exam-bookmark-btn-active", !isHidden);
    markedToggleBtn.setAttribute("aria-expanded", String(!isHidden));
  });
}

const syncSelectedAnswerStyles = () => {
  document.querySelectorAll(".exam-option").forEach((option) => {
    const optionInput = option.querySelector(".exam-option-input");
    const optionRadio = option.querySelector(".exam-radio");
    const isChecked = Boolean(optionInput && optionInput.checked);

    option.classList.toggle("exam-option-selected", isChecked);
    if (optionRadio) {
      optionRadio.classList.toggle("exam-radio-selected", isChecked);
    }
  });
};

answerInputs.forEach((input) => {
  input.addEventListener("change", syncSelectedAnswerStyles);
});

syncSelectedAnswerStyles();




