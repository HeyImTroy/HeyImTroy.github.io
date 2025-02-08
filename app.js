document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleAllButton = document.getElementById('toggleAllButton');
  const verseCards = document.querySelectorAll('.verse-card');

  // 1. TOGGLE ALL VERSES
  if (toggleAllButton && versesContainer) {
    toggleAllButton.addEventListener('click', () => {
      // Check if verses are visible
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
      // Only toggle if the user clicks within the card but not on the "Hide/Show All" button
      // (In practice, there's minimal risk of collision, but let's ensure it.)
      if (event.target.id === 'toggleAllButton') return;

      const verseTextElement = card.querySelector('.verse-text');
      if (verseTextElement.style.display === 'none') {
        verseTextElement.style.display = 'block';
      } else {
        verseTextElement.style.display = 'none';
      }
    });
  });
});

