import validCreditCard from "./luhn-algorithm";
import checkCard from "./check-card";

export default class ChooseCard {
  constructor(parent) {
    this.form = parent.querySelector(".widget-form");
    this.input = parent.querySelector(".widget-form__input");
    this.text = parent.querySelector(".widget-text");
    this.cards = Array.from(parent.querySelectorAll(".widget__card "));
  }

  submitForm() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validCreditCard(this.input.value)) {
        this.text.textContent = "Валидное значение";
      } else {
        this.text.textContent = "Невалидное значение";
      }
    });
  }

  checkInput() {
    this.input.addEventListener("input", () => {
      this.text.textContent = "";
      const result = checkCard(this.input.value);
      if (result) {
        this.removeDisabled();
        this.showCard(result);
      } else {
        this.removeDisabled();
      }
    });
  }

  showCard(result) {
    this.cards.forEach((card) => {
      if (!card.classList.contains(result)) {
        card.classList.add("cdisabled");
      }
    });
  }

  removeDisabled() {
    this.cards.forEach((card) => {
      card.classList.remove("cdisabled");
    });
  }
}
