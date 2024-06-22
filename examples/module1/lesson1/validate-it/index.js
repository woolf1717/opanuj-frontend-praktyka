function validator() {
  const inputToValidate = document.getElementById('input');
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const displayedMessage = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 100) {
      displayedMessage.innerHTML = `Valid`;
    } else {
      displayedMessage.innerHTML = 'Invalid';
    }
  });

  clearButton.addEventListener('click', () => {
    inputToValidate.value = '';
    displayedMessage.innerHTML = '';
  });
}

validator();
