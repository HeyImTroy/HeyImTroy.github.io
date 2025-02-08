document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleAllButton = document.getElementById('toggleAllButton');
  const verseCards = document.querySelectorAll('.verse-card');

  // Elements for Add Verse Form
  const showAddVerseFormButton = document.getElementById('showAddVerseFormButton');
  const addVerseFormSection = document.getElementById('add-verse-form-section');
  const addVerseForm = document.getElementById('add-verse-form');
  const verseReferenceInput = document.getElementById('verseReference');
  const verseTextInput = document.getElementById('verseText');

  /********************************************************
   * 1. TOGGLE ALL VERSES (Hide/Show)
   ********************************************************/
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

  /********************************************************
   * 2. INDIVIDUAL VERSE TOGGLE
   ********************************************************/
  verseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Avoid conflict if user clicks the global button
      if (event.target.id === 'toggleAllButton') return;

      const verseTextElement = card.querySelector('.verse-text');
      if (!verseTextElement) return;

      verseTextElement.style.display = 
        (verseTextElement.style.display === 'none') ? 'block' : 'none';
    });
  });

  /********************************************************
   * 3. SHOW / HIDE 'Add Verse' FORM
   ********************************************************/
  if (showAddVerseFormButton && addVerseFormSection) {
    showAddVerseFormButton.addEventListener('click', () => {
      if (addVerseFormSection.style.display === 'none') {
        addVerseFormSection.style.display = 'block';
      } else {
        addVerseFormSection.style.display = 'none';
      }
    });
  }

  /********************************************************
   * 4. HANDLE SUBMISSION OF NEW VERSE
   ********************************************************/
  if (addVerseForm) {
    addVerseForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop full page refresh

      // Obtain user input
      const reference = verseReferenceInput.value.trim();
      const text = verseTextInput.value.trim();

      if (!reference || !text) {
        alert('Please complete both fields: Verse Reference and Verse Text.');
        return;
      }

      // Create a new verse-card
      const newCard = document.createElement('article');
      newCard.classList.add('verse-card');

      // Heading: reference
      const heading = document.createElement('h2');
      heading.textContent = reference;

      // Paragraph: text
      const paragraph = document.createElement('p');
      paragraph.classList.add('verse-text');
      paragraph.textContent = text;

      // Attach heading & paragraph
      newCard.appendChild(heading);
      newCard.appendChild(paragraph);

      // Individual toggle logic for new card
      newCard.addEventListener('click', (event) => {
        if (event.target.id === 'toggleAllButton') return;
        const verseTextElement = newCard.querySelector('.verse-text');
        if (verseTextElement) {
          verseTextElement.style.display =
            (verseTextElement.style.display === 'none') ? 'block' : 'none';
        }
      });

      // Add to the container
      versesContainer.appendChild(newCard);

      // Reset and hide form
      verseReferenceInput.value = '';
      verseTextInput.value = '';
      addVerseFormSection.style.display = 'none';
    });
  }
});






