const enableBtn = function (btn) {
  btn.disabled = false;
};

const disableBtn = function (btn) {
  btn.disabled = true;
};

const controlBtnsState = (input, decreaseBtn, increaseBtn) => {
  //control state of decrease button
  if (input.value == 2) {
    enableBtn(decreaseBtn);
  } else if (input.value == 1) {
    disableBtn(decreaseBtn);
  }
  //control state of increase button
  if (input.value == 5) {
    disableBtn(increaseBtn);
  } else if (input.value == 4) {
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

  //control state of decrease button
  //   if (input.value == 2) {
  //     enableBtn(decreaseBtn);
  //   } else if (input.value == 1) {
  //     disableBtn(decreaseBtn);
  //   }
  //   //control state of increase button
  //   if (input.value == 5) {
  //     disableBtn(increaseBtn);
  //   } else if (input.value == 4) {
  //     enableBtn(increaseBtn);
  //   }
};
