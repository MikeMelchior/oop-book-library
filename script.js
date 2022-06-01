
let myLibrary = [];

const root = document.querySelector('.root');



function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    if (haveRead) {
        this.haveRead = 'Have read'
    } else {
        this.haveRead = 'Have not read'
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


/* add in a few books manually to vizualize */
const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 208, false);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theGreatGatsby);


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

function displayBooks() {
    myLibrary.forEach(book => {
        let bookNumber = myLibrary.indexOf(book) + 1;
        const div = document.createElement('div');
        div.classList.add(`book-${bookNumber}`);

        let para = document.createElement('p');
        para.textContent = book.title;
        div.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.author;
        div.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.pages;
        div.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.haveRead;
        div.appendChild(para);

        const main = document.querySelector('.main')
        main.appendChild(div);   
    })
};
 displayBooks();



