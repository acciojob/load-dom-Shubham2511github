document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // Clear the existing content of the <body> element
    document.body.innerHTML = '';

    // Create a text node with the desired content
    var textNode = document.createTextNode('DOM load success');

    // Append the text node to the <body> element
    document.body.appendChild(textNode);
  }, 4000);
});