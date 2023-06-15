//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Create a new <p> element
  var paragraph = document.createElement('p');

  // Set the text content of the paragraph
  paragraph.textContent = 'DOM load success';

  // Clear the existing content of the <body> element
  document.body.innerHTML = '';

  // Append the paragraph to the <body> element
  document.body.appendChild(paragraph);
});