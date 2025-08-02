// Get the display element
let display = document.getElementById('display');

/**
 * Function to add values (numbers/operators) to the display
 * Example: if user clicks '7', it will append 7 to the input
 */
function appendValue(value) {
  display.value += value; // add clicked value to existing text
}

/**
 * Function to clear the display screen. This will make the input field empty
 */
function clearDisplay() {
  display.value = '';
}

/**
 * Function to calculate the result
 * Using JavaScript eval() function to evaluate the math expression
 */
function calculateResult() {
  try {
    // Evaluate the entered expression like 7+8/2
    display.value = eval(display.value);
  } catch (error) {
    // If invalid expression, show 'Error'
    display.value = 'Error';
  }
}
