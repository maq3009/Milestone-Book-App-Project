

//This code adds the books in bookData to a "Bookshelf", 
//it adds a new book to the bookshelf, as a ul element
//and then appends it to the HTML page.
//
//
//
//
class Bookshelf {
    constructor(books = []) {
      this.books = books;
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    render() {
      const ul = document.createElement("ul");
      

      for (const book of this.books) {
        ul.append(book.render());///appends Title//////////
        ul.append(book.render1());///appends Subject////////
        ul.append(book.render2());///appends Language/////////
        ul.append(book.render3());///appends Author/////////////
        ul.append(book.getRandomBookPages());///////////////////Alternate Assessment Requirement #4//////////////////////
        ul.append(book.addComment());///user input comment text area
        ul.appendChild(document.createElement("br"));/////////////////
        ul.appendChild(document.createElement("br"));//////////////////
        ul.appendChild(document.createElement("br"));////Just a linebreak
      }
      
      return ul;
    }
      
  }