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
   * 2. INDIVIDUAL VERSE TOGGLE (click on .verse-card)
   ********************************************************/
  verseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Prevent interfering if the global toggle button was clicked
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
      e.preventDefault(); // Prevents page refresh

      // Collect user input
      const reference = verseReferenceInput.value.trim();
      const text = verseTextInput.value.trim();

      // Validation
      if (!reference || !text) {
        alert('Please complete both the reference and the verse text.');
        return;
      }

      // Create new card
      const newCard = document.createElement('article');
      newCard.classList.add('verse-card');

      // Add a heading for the reference
      const heading = document.createElement('h2');
      heading.textContent = reference;

      // Add a paragraph for the verse text
      const paragraph = document.createElement('p');
      paragraph.classList.add('verse-text');
      paragraph.textContent = text;

      // Append heading and paragraph to the new card
      newCard.appendChild(heading);
      newCard.appendChild(paragraph);

      // Include toggle logic for the newly created card
      newCard.addEventListener('click', (event) => {
        if (event.target.id === 'toggleAllButton') return;
        const verseTextElement = newCard.querySelector('.verse-text');
        if (verseTextElement) {
          verseTextElement.style.display =
            (verseTextElement.style.display === 'none') ? 'block' : 'none';
        }
      });

      // Add the new card to #verses-container
      versesContainer.appendChild(newCard);

      // Clear inputs and hide the form
      verseReferenceInput.value = '';
      verseTextInput.value = '';
      addVerseFormSection.style.display = 'none';
    });
  }
});









