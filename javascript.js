const myLibrary = [];


function Book(title, author, link, summary) {
    this.title = title;
    this.author = author;
    this.link = link;
    this.summary = summary;
}

Book.prototype.addBookToLibrary = function() {
    appendToLibrary(this.title, this.author, this.link, this.summary);

}

function appendToLibrary(title, author, link, summary) {
    const library = document.querySelector("#library");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    library.appendChild(bookCard);


    const img = document.createElement("img");
    img.setAttribute("src", `${link}`);
    bookCard.appendChild(img);

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");
    bookCard.appendChild(bookDetails);

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
}


const theAlchemist = new Book(
    "The Alchemist", "Paulo Coelho", 
    "https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UF894,1000_QL80_.jpg", 
    "The Alchemist by Paulo Coelho follows Santiago, a young shepherd, on a journey to find a hidden treasure. Along the way, he learns about following his dreams, listening to his heart, and discovering the spiritual truths that guide his life.");

appendToLibrary(theAlchemist.title, theAlchemist.author, theAlchemist.link);
