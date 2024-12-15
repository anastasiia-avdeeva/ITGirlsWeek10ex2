const enableBtn = function (btn) {
  btn.disabled = false;
};

const disableBtn = function (btn) {
  btn.disabled = true;
};

const controlBtnsState = (input, decreaseBtn, increaseBtn) => {
  const value = parseInt(input.value);

  //control state of decrease button
  if (value > 1) {
    enableBtn(decreaseBtn);
  } else if (value === 1) {
    disableBtn(decreaseBtn);
  }
  //control state of increase button
  if (value === 5) {
    disableBtn(increaseBtn);
  } else if (value < 5) {
    enableBtn(increaseBtn);
  }
};

const adjustQuantity = (inputId, increaseBtnId, decreaseBtnId, action) => {
  const input = document.getElementById(inputId);
  const increaseBtn = document.getElementById(increaseBtnId);
  const decreaseBtn = document.getElementById(decreaseBtnId);
  const value = parseInt(input.value);

  if (action === "increase") {
    input.value = value + 1;
  } else if (action === "decrease") {
    input.value = value - 1;
  }

  controlBtnsState(input, decreaseBtn, increaseBtn);
};

function validateUserInput(input) {
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

  const card = input.closest(".card");
  const decreaseBtn = card.querySelector(".card__decrease-btn");
  const increaseBtn = card.querySelector(".card__increase-btn");

  controlBtnsState(input, decreaseBtn, increaseBtn);
}

function notEmpty(input) {
  const value = input.value;
  const card = input.closest(".card");
  const decreaseBtn = card.querySelector(".card__decrease-btn");
  const increaseBtn = card.querySelector(".card__increase-btn");

  if (value === "") {
    input.value = 1;
  }
  controlBtnsState(input, decreaseBtn, increaseBtn);
}
