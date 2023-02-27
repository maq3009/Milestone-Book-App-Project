

//////All the consts are loaded in first, they get the elements that we need from the other scripts
//////or html stuff.


const app = document.querySelector("#app");
const bookshelf = new Bookshelf();
const bookmarkAuthor = document.querySelector(".bookmark-author");
const bookmarkLanguage = document.querySelector(".bookmark-language");
const bookmarkSubject = document.querySelector(".bookmark-subject");
const bookmarkTitle = document.querySelector(".bookmark-title")
const addBtn = document.querySelector(".add-bookmark")
const english = document.querySelector(".english")
const german = document.querySelector(".german")
const french = document.querySelector(".french")
const finnish = document.querySelector(".finnish")
const bookmarks = document.querySelector(".bookmarks")
const bookStats = document.querySelector("#stats")



//This adds the empty array where the new added books will go
let bookmarkData = [];
let booklanguage = [];




//This creates an instance of the new book with the information inputted by the user
const createBookmarkElement = (bookmark, i) => {
    const li = document.createElement("li");
    li.classList.add("bookmark");
//Creates a li element to then append a "p" element////
    const a = document.createElement("p");/////////////
    const b = document.createElement("p");/////////////
    const c = document.createElement("p");/////////////
    const d = document.createElement("p");/////////////
    a.setAttribute("href", bookmark.author);         //
    a.textContent = bookmark.author;                 //
    a.classList.add("newBookBold");                  //
    a.appendChild(document.createElement("br"));     //
    b.setAttribute("href", bookmark.language);       //
    b.textContent = bookmark.language;               //
    b.appendChild(document.createElement("br"));     //
    c.setAttribute("href", bookmark.subject);        //
    c.textContent = bookmark.subject;                //
    c.appendChild(document.createElement("br"));     //
    d.setAttribute("href", bookmark.title);          //
    d.textContent = bookmark.title;                  //
                                                     //
    li.append(a);        ////                       //
    li.append(b);     /////////////////////////////////
    li.append(c);     //////
    li.append(d);        ////



    /////This is the remove button for the new books created by the user///////////////
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Delete";
    removeBtn.style.marginLeft = "20px";
    removeBtn.addEventListener("click", () => {
        bookmarkData.splice(i, 1);
        renderBookmarks();
    });
    li.append(removeBtn);
    
    return li;
    
};



const renderBookmarks = () => {
    const bookmarkElements = bookmarkData.map(createBookmarkElement)
    bookmarks.replaceChildren(...bookmarkElements);
};


////////////////Provides a list of english books when you click on the english button on the homepage./////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
english.addEventListener("click", () => {
    const engList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item.author
            element.appendChild(li)
        });
    }
    
    const engFilteredBooks = bookData.filter(book => book.language === "en");

    engList(engFilteredBooks, english)
})
        
renderBookmarks();

////////////////Provides a list of german books when you click on the german button on the homepage./////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
german.addEventListener("click", () => {
    const germanList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item.author
            element.appendChild(li)
        });
    }
    
    const germanFilteredBooks = bookData.filter(book => book.language === "de");

    germanList(germanFilteredBooks, german)
})
        
renderBookmarks();



////////////////Provides a list of french books when you click on the french button on the homepage./////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
french.addEventListener("click", () => {
    const frenchList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item.author
            element.appendChild(li)
        });
    }
    
    const frenchFilteredBooks = bookData.filter(book => book.language === "fr");

    frenchList(frenchFilteredBooks, french)
})
        
renderBookmarks();


////////////////Provides a list of finnish books when you click on the finnish button on the homepage./////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
finnish.addEventListener("click", () => {
    const finnishList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item.author
            element.appendChild(li)
        });
    }
    
    const finnishFilteredBooks = bookData.filter(book => book.language === "fi");

    finnishList(finnishFilteredBooks, finnish)
})
        
renderBookmarks();



addBtn.addEventListener("click", () => {
    let author = bookmarkAuthor.value;
    let language = bookmarkLanguage.value;
    let subject = bookmarkSubject.value;
    let title = bookmarkTitle.value;

    if (!author || !language || !subject || !title) {
        console.log("no input");
        return;
    }
    bookmarkData.push({author, language, subject, title});
    renderBookmarks();
})



// Loads in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
  
}

//This appends the bookshelf instance to the HTML page.
app.append(bookshelf.render());


