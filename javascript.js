import {default as validateForm} from "./validation.js";

class Library {
  constructor() {
    this.library = [];
  }

  addToLibrary(book) {
    this.library.push(book);
    console.log(`${book} successfully added to library.`);
    console.log(this.library);
    this.displayLibrary();
  }

  removeFromLibrary(book) {
    const index = this.library.indexOf(book);
    if (index !== -1) {
      this.library.splice(index, 1);
      console.log(`${book} successfully removed from library.`);
      this.displayLibrary();
    } else {
      console.log(`${book} not found. Cannot be removed`);
    }
  }

  renderBook(title, author, cover, summary, quote) {
    const library = document.querySelector("#library");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    library.appendChild(bookCard);

    const newDiv = document.createElement("div");
    bookCard.appendChild(newDiv);

    const img = document.createElement("img");
    img.setAttribute("src", `${cover}`);
    img.classList.add("book-cover");
    newDiv.appendChild(img);

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");
    newDiv.appendChild(bookDetails);

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = title;
    bookDetails.appendChild(bookTitle);

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = author;
    bookDetails.appendChild(bookAuthor);

    const bookSummary = document.createElement("div");
    bookSummary.classList.add("book-summary");
    bookSummary.textContent = summary;
    bookDetails.appendChild(bookSummary);

    const bookQuote = document.createElement("blockquote");
    bookQuote.textContent = quote;
    bookDetails.appendChild(bookQuote);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove from Library";
    bookCard.appendChild(removeButton);
  }

  displayLibrary() {
    const library = document.getElementById("library");
    library.innerHTML = "";

    this.library.forEach((book, index) => {
      this.renderBook(
        book.title,
        book.author,
        book.cover,
        book.summary,
        book.quote
      );
      const removeButtons = library.querySelectorAll(".remove");
      removeButtons.forEach((button, i) => {
        if (i === index) {
          button.addEventListener("click", (event) => {
            event.stopPropagation();
            this.removeFromLibrary(book);
          });
        }
      });
    });
  }
}

class Book {
  constructor(title, author, cover, summary, quote) {
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.summary = summary;
    this.quote = quote;
  }
}

const myLibrary = new Library();

(function exampleBooks() {
  const meditations = new Book(
    "Meditations",
    "Marcus Aurelius",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVdFLrBZCCB8n6Z7zvSiwGcTQWla6dvOv4w&s",
    "Marcus Aurelius’ Meditations is a collection of personal reflections offering timeless Stoic wisdom. It explores virtue, resilience, and the impermanence of life, guiding readers toward inner peace, self-discipline, and navigating challenges with grace and philosophical clarity.",
    "You have power over your mind - not outside events. Realize this, and you will find strength."
  );

  myLibrary.addToLibrary(meditations);

  const theAlchemist = new Book(
    "The Alchemist",
    "Paulo Coelho",
    "https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UF894,1000_QL80_.jpg",
    "The Alchemist by Paulo Coelho follows Santiago, a young shepherd, on a journey to find a hidden treasure. Along the way, he learns about following his dreams, listening to his heart, and discovering the spiritual truths that guide his life.",
    "When you want something, all the universe conspires in helping you to achieve it."
  );

  myLibrary.addToLibrary(theAlchemist);

  const atomicHabits = new Book(
    "Atomic Habits",
    "James Clear",
    "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
    "Atomic Habits is a transformative guide to habit formation. It highlights the power of small, consistent changes and provides actionable strategies to build good habits, break bad ones, and create systems for sustainable personal and professional growth.",
    "You do not rise to the level of your goals. You fall to the level of your systems."
  );

  myLibrary.addToLibrary(atomicHabits);
})();

(function addNewBookForm() {
  const form = document.getElementById("book-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-input").value;
    const author = document.getElementById("author-input").value;
    const link = document.getElementById("link-input").value;
    const summary = document.getElementById("summary-input").value;
    let quote = document.getElementById("quote-input").value;
    quote = `"${quote}"`;

    const newBook = new Book(title, author, link, summary, quote);
    myLibrary.addToLibrary(newBook);

    form.reset();
  });
})();

validateForm();