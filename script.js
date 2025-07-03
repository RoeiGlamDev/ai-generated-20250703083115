// Get the display element
const display = document.getElementById('display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Handle number buttons
    if (value >= '0' && value <= '9' || value === '.') {
      currentNumber += value;
      display.value = currentNumber;
    }

    // Handle operator buttons
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      previousNumber = currentNumber;
      operator = value;
      currentNumber = '';
      display.value = '';
    }

    // Handle equals button
    if (value === '=') {
      const result = calculate(previousNumber, operator, currentNumber);
      display.value = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    }

    // Handle clear button
    if (value === 'clear') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      display.value = '';
    }
  });
});

// Calculate the result
function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero';
      }
      return num1 / num2;
    default:
      return '';
  }
}

// Add fade-in animation to the display
display.classList.add('fade-in');

// Add smooth transition to the buttons
buttons.forEach(button => {
  button.classList.add('smooth-transition');
});