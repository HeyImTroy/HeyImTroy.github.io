document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleAllButton = document.getElementById('toggleAllButton');
  const verseCards = document.querySelectorAll('.verse-card');

  // 1. TOGGLE ALL VERSES
  if (toggleAllButton && versesContainer) {
    toggleAllButton.addEventListener('click', () => {
      // If the container is hidden, show it; otherwise, hide it
      if (versesContainer.style.display === 'none') {
        versesContainer.style.display = 'block';
        toggleAllButton.textContent = 'Hide/Show All Verses';
      } else {
        versesContainer.style.display = 'none';
        toggleAllButton.textContent = 'Show All Verses';
      }
    });
  }

  // 2. TOGGLE INDIVIDUAL VERSE TEXT
  verseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Ensure we don't conflict with the "Toggle All" button
      if (event.target.id === 'toggleAllButton') return;

      // Toggle the .verse-text inside the clicked card
      const verseTextElement = card.querySelector('.verse-text');
      if (!verseTextElement) return; // Safety check

      if (verseTextElement.style.display === 'none') {
        verseTextElement.style.display = 'block';
      } else {
        verseTextElement.style.display = 'none';
      }
    });
  });
});



