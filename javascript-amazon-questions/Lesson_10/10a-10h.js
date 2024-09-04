function classChecker() {
  const buttonElement = document.querySelector(`.js-button`);
  
  if (buttonElement.classList.contains(`js-button`)) {
  console.log(`Test`);
  } else {
    console.log(`Not`);
  }
};

function toggle(buttonText) {
  document.querySelector(`.gaming-button`).classList.remove(`is-toggled`);
  document.querySelector(`.music-button`).classList.remove(`is-toggled`);
  document.querySelector(`.tech-button`).classList.remove(`is-toggled`);

  buttonElement = document.querySelector(`.${buttonText}-button`);

  if (buttonElement.classList.contains(`is-toggled`)) {
    buttonElement.classList.remove(`is-toggled`);
  } else {
    buttonElement.classList.add(`is-toggled`);
  }
};

function handleCostKeyDown(event) {
  if (event.key === `Enter`) {
    calculateTotal();
  };
};

function calculateTotal() {
  const inputElememt = document.querySelector(`.js-cost-input`);
  let cost = Number(inputElememt.value);

  if (cost < 0) {
    document.querySelector('.js-total-cost').classList.add(`js-error-cost`);
    document.querySelector('.js-total-cost').innerHTML = `Error: cost cannot be less than $0`;  
  } else if ((cost < 40) && (cost > 0)) {
    cost += 10;
    document.querySelector('.js-total-cost').classList.remove(`js-error-cost`);
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  };
};