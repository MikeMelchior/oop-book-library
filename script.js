
let myLibrary = [];
let bookNumber = 0; 

const root = document.querySelector('.root');



function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}





function makeHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    root.appendChild(header);
}
makeHeader();

const div = document.createElement('div');
div.classList.add('main');
root.appendChild(div);



function addHeaderContent() {
    const button = document.createElement('button');
    const headerTitle = document.createElement('h1');

    button.classList.add('add-book');
    headerTitle.classList.add('header-title');

    const header = document.querySelector('.header');

    button.textContent = 'Add Book';
    headerTitle.textContent = 'Books Library';

    header.appendChild(headerTitle);
    header.appendChild(button);
}
addHeaderContent();

function displayBook() {
    myLibrary.forEach(book => {
        bookNumber += 1;
        const div = document.createElement('div');
        div.classList.add(`card-${bookNumber}`);
        const main = document.querySelector('.main')
        main.appendChild(div);
    })
}




