document.addEventListener('DOMContentLoaded', () => {
  const versesContainer = document.getElementById('verses-container');
  const toggleAllButton = document.getElementById('toggleAllButton');
  const verseCards = document.querySelectorAll('.verse-card');

  // ADDING NEW ELEMENTS
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
   * 2. INDIVIDUAL VERSE TOGGLE (Click on .verse-card)
   ********************************************************/
  verseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Prevent conflict with the "Hide/Show All" button
      if (event.target.id === 'toggleAllButton') return;

      const verseTextElement = card.querySelector('.verse-text');
      if (!verseTextElement) return;

      if (verseTextElement.style.display === 'none') {
        verseTextElement.style.display = 'block';
      } else {
        verseTextElement.style.display = 'none';
      }
    });
  });

  /********************************************************
   * 3. SHOW THE ADD VERSE FORM WHEN "Add a New Verse" CLICKED
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
      e.preventDefault(); // Prevent page reload

      // Get user input
      const reference = verseReferenceInput.value.trim();
      const text = verseTextInput.value.trim();

      // Basic validation
      if (!reference || !text) {
        alert('Please fill out both the Verse Reference and Text.');
        return;
      }

      // Create a new .verse-card article
      const newCard = document.createElement('article');
      newCard.classList.add('verse-card');

      // Create the <h2> element for reference
      const heading = document.createElement('h2');
      heading.textContent = reference;

      // Create the <p> element for verse text
      const paragraph = document.createElement('p');
      paragraph.classList.add('verse-text');
      paragraph.textContent = text;

      // Append heading & paragraph to the newCard
      newCard.appendChild(heading);
      newCard.appendChild(paragraph);

      // Add toggling ability to the new card (like existing ones)
      newCard.addEventListener('click', (event) => {
        if (event.target.id === 'toggleAllButton') return;

        const verseTextElement = newCard.querySelector('.verse-text');
        if (!verseTextElement) return;

        verseTextElement.style.display = 
          (verseTextElement.style.display === 'none') ? 'block' : 'none';
      });

      // Append the new card to #verses-container
      versesContainer.appendChild(newCard);

      // Optionally, reset form fields
      verseReferenceInput.value = '';
      verseTextInput.value = '';

      // Hide the form after submission
      addVerseFormSection.style.display = 'none';
    });
  }
});





