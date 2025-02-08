document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleAllButton = document.getElementById('toggleAllButton');
  const verseCards = document.querySelectorAll('.verse-card');

  // Toggle all verses on/off
  if (toggleAllButton && versesContainer) {
    toggleAllButton.addEventListener('click', () => {
      if (versesContainer.style.display === 'none') {
        versesContainer.style.display = 'block';
        toggleAllButton.textContent = 'Hide/Show All Verses';
      } else {
        versesContainer.style.display = 'none';
        toggleAllButton.textContent = 'Show All Verses';
      }
    });
  }

  // Toggle each verse individually
  verseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Prevent interfering with the "Toggle All" button
      if (event.target.id === 'toggleAllButton') return;

      // Toggle the verse text within the clicked card
      const verseText = card.querySelector('.verse-text');
      if (verseText) {
        verseText.style.display = (verseText.style.display === 'none') ? 'block' : 'none';
      }
    });
  });
});




