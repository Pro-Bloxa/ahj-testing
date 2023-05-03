/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/luhn-algorithm.js
// Takes a credit card string value and returns true on valid number
function validCreditCard(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm.
  let nCheck = 0,
    bEven = false;
  value = value.replace(/\D/g, "");
  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 == 0;
}
;// CONCATENATED MODULE: ./src/js/check-card.js
function checkCard(code) {
  if (code.startsWith("22")) {
    return "mir";
  }
  if (code.startsWith("4")) {
    return "visa";
  }
  if (code.startsWith("34") || code.startsWith("37")) {
    return "american-express";
  }
  if (code.startsWith("60")) {
    return "discover";
  }
  if (code.startsWith("31") || code.startsWith("35")) {
    return "jcb";
  }
  if (code.startsWith("30") || code.startsWith("36") || code.startsWith("38")) {
    return "diners-club";
  }
  if (code.startsWith("51") || code.startsWith("52") || code.startsWith("53") || code.startsWith("54") || code.startsWith("55")) {
    return "mastercard";
  }
  return false;
}
;// CONCATENATED MODULE: ./src/js/chooseCard.js


class ChooseCard {
  constructor(parent) {
    this.form = parent.querySelector(".widget-form");
    this.input = parent.querySelector(".widget-form__input");
    this.text = parent.querySelector(".widget-text");
    this.cards = Array.from(parent.querySelectorAll(".widget__card "));
  }
  submitForm() {
    this.form.addEventListener("submit", event => {
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
        this.showCard(result);
      } else {
        this.removeDisabled();
      }
    });
  }
  showCard(result) {
    this.cards.forEach(card => {
      if (!card.classList.contains(result)) {
        card.classList.add("cdisabled");
      }
    });
  }
  removeDisabled() {
    this.cards.forEach(card => {
      card.classList.remove("cdisabled");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const chooseCard = new ChooseCard(document.body);
console.log(chooseCard);
chooseCard.submitForm();
chooseCard.checkInput();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map