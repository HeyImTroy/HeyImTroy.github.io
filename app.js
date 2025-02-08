/****************************************************
 * 1. DEFAULT VERSES
 ****************************************************/
const defaultVerses = [
  {
    reference: "Proverbs 24:12 (NIV)",
    text: `“If you say, ‘But we knew nothing about this,’ does not he who weighs the heart perceive it? 
Does not he who guards your life know it? Will he not repay everyone according to what they have done?”`
  },
  {
    reference: "Revelation 2:26-27 (NIV)",
    text: `“To the one who is victorious and does my will to the end, I will give authority over the nations— 
that one ‘will rule them with an iron scepter and will dash them to pieces like pottery’—
just as I have received authority from my Father.”`
  },
  {
    reference: "James 5:19-20 (NIV)",
    text: `“My brothers and sisters, if one of you should wander from the truth and someone should bring that person back, 
remember this: Whoever turns a sinner from the error of their way will save them from death 
and cover over a multitude of sins.”`
  },
  {
    reference: "Jeremiah 5:14 (NIV)",
    text: `“Therefore this is what the Lord God Almighty says: ‘Because the people have spoken these words, I will make 
my words in your mouth a fire and these people the wood it consumes.’”`
  },
  {
    reference: "2 Peter 3:10-13 (NIV)",
    text: `“But the day of the Lord will come like a thief. The heavens will disappear with a roar; 
the elements will be destroyed by fire, and the earth and everything done in it will be laid bare. 
Since everything will be destroyed in this way, what kind of people ought you to be? 
You ought to live holy and godly lives as you look forward to the day of God and speed its coming...”`
  },
  {
    reference: "James 1:5-8 (NIV)",
    text: `“If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, 
and it will be given to you. But when you ask, you must believe and not doubt...”`
  },
  {
    reference: "Exodus 25:8-9 (NIV)",
    text: `“Then have them make a sanctuary for me, and I will dwell among them. 
Make this tabernacle and all its furnishings exactly like the pattern I will show you.”`
  },
  {
    reference: "Malachi 3:1 (NIV)",
    text: `“I will send my messenger, who will prepare the way before me. Then suddenly the Lord you are seeking 
will come to his temple; the messenger of the covenant, whom you desire, will come,” says the Lord Almighty.”`
  },
  {
    reference: "Revelation 19:7-8 (NIV)",
    text: `“Let us rejoice and be glad and give him glory! For the wedding of the Lamb has come, 
and his bride has made herself ready. Fine linen, bright and clean, was given her to wear.” 
(Fine linen stands for the righteous acts of God’s holy people.)`
  },
  {
    reference: "Acts 17:18-19 (NIV)",
    text: `“A group of Epicurean and Stoic philosophers began to debate with him. Some of them asked, 
‘What is this babbler trying to say?’ Others remarked, ‘He seems to be advocating foreign gods.’ 
They said this because Paul was preaching the good news about Jesus and the resurrection. 
Then they took him and brought him to a meeting of the Areopagus, where they said to him, 
‘May we know what this new teaching is that you are presenting?’”`
  }
];

/****************************************************
 * 2. CHECK localStorage & INITIALISE
 ****************************************************/
function getStoredVerses() {
  const storedData = localStorage.getItem("verses");
  if (storedData) {
    // Parse existing data
    return JSON.parse(storedData);
  } else {
    // If no data in localStorage, store defaultVerses
    localStorage.setItem("verses", JSON.stringify(defaultVerses));
    return defaultVerses;
  }
}

function setStoredVerses(versesArray) {
  localStorage.setItem("verses", JSON.stringify(versesArray));
}

/****************************************************
 * 3. RENDER VERSE CARDS
 ****************************************************/
function createVerseCard(reference, text) {
  // Create article
  const card = document.createElement("article");
  card.classList.add("verse-card");

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = reference;

  // Create paragraph
  const paragraph = document.createElement("p");
  paragraph.classList.add("verse-text");
  paragraph.textContent = text;

  // Append children
  card.appendChild(heading);
  card.appendChild(paragraph);

  // Individual toggle on click
  card.addEventListener("click", (event) => {
    // Avoid conflict with the global toggle button
    if (event.target.id === "toggleAllButton") return;

    paragraph.style.display =
      paragraph.style.display === "none" ? "block" : "none";
  });

  return card;
}

function renderAllVerses(container, versesArray) {
  // Clear container
  container.innerHTML = "";
  // Create a card for each verse
  versesArray.forEach((verseObj) => {
    const newCard = createVerseCard(verseObj.reference, verseObj.text);
    container.appendChild(newCard);
  });
}

/****************************************************
 * 4. ON DOM LOADED
 ****************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const versesContainer = document.getElementById("verses-container");
  const toggleAllButton = document.getElementById("toggleAllButton");
  const showAddVerseFormButton = document.getElementById("showAddVerseFormButton");
  const addVerseFormSection = document.getElementById("add-verse-form-section");
  const addVerseForm = document.getElementById("add-verse-form");
  const verseReferenceInput = document.getElementById("verseReference");
  const verseTextInput = document.getElementById("verseText");

  // 4.1. LOAD verses from localStorage or default
  let versesArray = getStoredVerses();  // array of {reference, text}
  renderAllVerses(versesContainer, versesArray);

  /****************************************************
   * 4.2. TOGGLE ALL VERSES (Hide/Show)
   ****************************************************/
  if (toggleAllButton && versesContainer) {
    toggleAllButton.addEventListener("click", () => {
      if (versesContainer.style.display === "none") {
        versesContainer.style.display = "block";
        toggleAllButton.textContent = "Hide/Show All Verses";
      } else {
        versesContainer.style.display = "none";
        toggleAllButton.textContent = "Show All Verses";
      }
    });
  }

  /****************************************************
   * 4.3. SHOW / HIDE 'Add Verse' FORM
   ****************************************************/
  if (showAddVerseFormButton && addVerseFormSection) {
    showAddVerseFormButton.addEventListener("click", () => {
      if (addVerseFormSection.style.display === "none") {
        addVerseFormSection.style.display = "block";
      } else {
        addVerseFormSection.style.display = "none";
      }
    });
  }

  /****************************************************
   * 4.4. HANDLE NEW VERSE SUBMISSION
   ****************************************************/
  if (addVerseForm) {
    addVerseForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get user input
      const reference = verseReferenceInput.value.trim();
      const text = verseTextInput.value.trim();

      if (!reference || !text) {
        alert("Please complete both fields: Verse Reference and Verse Text.");
        return;
      }

      // Create new verse object
      const newVerse = { reference, text };

      // Update the array + localStorage
      versesArray.push(newVerse);
      setStoredVerses(versesArray);

      // Re-render or just append the new card
      renderAllVerses(versesContainer, versesArray);

      // Reset and hide form
      verseReferenceInput.value = "";
      verseTextInput.value = "";
      addVerseFormSection.style.display = "none";
    });
  }
});










