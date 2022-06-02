
let myLibrary = [];

const root = document.querySelector('.root');


function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = `${pages} pages`;
    if (haveRead) {
        this.haveRead = 'Have read'
    } else {
        this.haveRead = "Haven't read"
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


/* add in a few books manually to vizualize */
const toKillAMockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);
const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 208, false);
const aCatcherInTheRye = new Book('A Catcher in the Rye', 'J.D. Salinger', 234, false)
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theGreatGatsby);
addBookToLibrary(aCatcherInTheRye);



/* Below two functions are used for my janky way of updating the display.
Remove everything from display and then replace main with fresh empty container
and then run displayBooks func to add updated list of books w/ buttons to display */
function makeMain() {
    const div = document.createElement('div');
    div.classList.add('main');
    root.appendChild(div);
}

function removeMain() {
    let main = document.querySelector('.main');
    root.removeChild(main);
}


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
        let bookNumber = myLibrary.indexOf(book);

        //create book card
        const div = document.createElement('div');
        div.classList.add(`book-${bookNumber}`);

        //create book section
        const upperDiv = document.createElement('div')
        upperDiv.classList.add('book');
        div.appendChild(upperDiv);

        //create 'book cover' text
        let para = document.createElement('p');
        para.textContent = book.title;
        upperDiv.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.author;
        upperDiv.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.pages;
        upperDiv.appendChild(para);
        para = document.createElement('p');
        para.textContent = book.haveRead;
        upperDiv.appendChild(para);

        //create div for option buttons (delete, toggle read)
        const lowerDiv = document.createElement('div');
        lowerDiv.classList.add('book-buttons');
        div.appendChild(lowerDiv);

        //create delete button
        let button = document.createElement('button');
        button.classList.add(`delete-${bookNumber}`);
        button.textContent = 'Remove Book';
        lowerDiv.appendChild(button);

        //create read toggle button
        button = document.createElement('button');
        button.classList.add(`read-${bookNumber}`);
        button.textContent = 'Toggle read';
        lowerDiv.appendChild(button);

        //append entire card to main
        const main = document.querySelector('.main');
        main.appendChild(div);   

        //add delete button functionality
        let deleteButton = document.querySelector(`.delete-${bookNumber}`);
        deleteButton.addEventListener('click', deleteBook)

        //add toggle button functionality
        let readToggleButton = document.querySelector(`.read-${bookNumber}`);
        readToggleButton.addEventListener('click', toggleRead)

    })
};
displayBooks();

function deleteBook(e) {
    //below line of code splices book out of library using classlist to determine index
    //indices then get refreshed upon calling displayBooks
    myLibrary.splice(e.target.classList[0].split('-')[1], 1);
    removeMain();
    makeMain();
    displayBooks();
}

function toggleRead(e) {
    let readStatus = myLibrary[e.target.classList[0].split('-')[1]].haveRead;
    console.log(e)
    if (readStatus == 'Have read') {
        myLibrary[e.target.classList[0].split('-')[1]].haveRead = "Haven't read"
    } else {
        myLibrary[e.target.classList[0].split('-')[1]].haveRead = "Have read"
    }
    
}


function bookForm(e) {
    console.log(e)
    let form = document.querySelector('.book-form');
    form.classList.toggle('show-form')
}

document.querySelector('.add-book').addEventListener('click', bookForm)

