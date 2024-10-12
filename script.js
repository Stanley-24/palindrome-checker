document.getElementById('check-btn').addEventListener('click', function () {
  let textInput = document.getElementById('text-input').value;
  let result = document.getElementById('result');

  if (textInput === '') {
      alert('Please input a value');
      return;
  }

  // Clean the input by removing non-alphanumeric characters and converting to lowercase
  let cleanInput = textInput.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let reversedInput = cleanInput.split('').reverse().join('');

  // Check if the cleaned input is a palindrome
  if (cleanInput === reversedInput) {
      result.textContent = `${textInput} is a palindrome`;
      result.style.color = '#0277bd'; // Blue color for correct result
  } else {
      result.textContent = `${textInput} is not a palindrome`;
      result.style.color = 'red'; // Red color for incorrect result
  }
});
