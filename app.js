document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleButton = document.getElementById('toggleButton');

  if (toggleButton && versesContainer) {
    toggleButton.addEventListener('click', () => {
      if (versesContainer.style.display === 'none') {
        versesContainer.style.display = 'block';
        toggleButton.textContent = 'Hide/Show Verses';
      } else {
        versesContainer.style.display = 'none';
        toggleButton.textContent = 'Show Verses';
      }
    });
  }
});
