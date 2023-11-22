document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('word-container');

  function createWord(word) {
      const wordDiv = document.createElement('div');
      wordDiv.classList.add('word');
      wordDiv.textContent = word;
      wordDiv.style.left = Math.random() * 100 + '%';
      wordDiv.style.animation = 'fall ' + (Math.random() * 5 + 5) + 's linear';

      wordDiv.addEventListener('click', function() {
          window.open('https://www.google.com/search?q=' + word);
      });

      container.appendChild(wordDiv);

      setTimeout(() => container.removeChild(wordDiv), 5000);
  }
  function fetchRandomWord() {
      fetch('https://random-word-api.herokuapp.com/word')
          .then(response => response.json())
          .then(data => {
              createWord(data[0]);
          })
          .catch(error => console.error('Error:', error));
  }

  setInterval(fetchRandomWord, 1000);
});
