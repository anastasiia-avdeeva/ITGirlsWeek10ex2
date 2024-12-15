let itemsNum = 0;
let totalCosts = 0;

const enableBtn = function (btn) {
  btn.disabled = false;
};

const disableBtn = function (btn) {
  btn.disabled = true;
};

const controlBtnsState = (input) => {
  const card = input.closest(".card");
  const decreaseBtn = card.querySelector(".card__decrease-btn");
  const increaseBtn = card.querySelector(".card__increase-btn");
  const value = parseInt(input.value);
  const min = parseInt(input.min);
  const max = parseInt(input.max);

  //control state of decrease button
  if (value > min) {
    enableBtn(decreaseBtn);
  } else if (value === min) {
    disableBtn(decreaseBtn);
  }
  //control state of increase button
  if (value === max) {
    disableBtn(increaseBtn);
  } else if (value < max) {
    enableBtn(increaseBtn);
  }
};

const adjustQuantity = (inputId, action) => {
  const input = document.getElementById(inputId);
  const value = parseInt(input.value);

  if (action === "increase") {
    input.value = value + 1;
  } else if (action === "decrease") {
    input.value = value - 1;
  }

  controlBtnsState(input);
};

function adjustUserInput(input) {
  const min = parseInt(input.min);
  const max = parseInt(input.max);
  let value = input.value;

  value = value.replace(/[^0-9]/g, "");
  input.value = value;

  if (parseInt(value) < min) {
    input.value = min;
  } else if (parseInt(value) > max) {
    input.value = max;
  }

  controlBtnsState(input);
}

function notEmpty(input) {
  const value = input.value;
  const min = parseInt(input.min);

  if (value === "") {
    input.value = min;
  }

  controlBtnsState(input);
}

function addPriceAmount(btn) {
  const card = btn.closest(".card");
  const input = card.querySelector(".card__input");
  const value = input.value;

  itemsNum += parseInt(value);
  const priceStr = card.querySelector(".card__price--bold").textContent;
  const price = parseInt(priceStr.split(" ")[0]);
  totalCosts += price * value;
}

function calculateTotalPrice() {
  const pasteTo = document.querySelector(".result");

  if (itemsNum === 0) {
    pasteTo.textContent = "Вы ничего не выбрали";
    pasteTo.style.color = "red";
    return;
  }

  pasteTo.textContent = `Общая стоимость составляет ${
    totalCosts.toLocaleString("ru-RU")
  } рублей. Количество единиц товара: ${itemsNum}.`;
}
