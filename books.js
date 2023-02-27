
//This code creates an instance of every book in the array bookData as an li element or ul element.


class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }




//This renders the "Title" of the book for every book in the BookData array
    render() {
      const li = document.createElement("li");
      li.style.fontSize = "18px";
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
      li.textContent = this.title;
      return li;




//This renders the "Subject" of the book for every book in the BookData array
    };
    render1() {
        const subjeto = document.createElement("li");
        subjeto.textContent = this.subject;
        return subjeto;
    };






//This renders the "Language" of the book for every book in the BookData array
    render2() {
        const lenguaje = document.createElement("li");
        lenguaje.textContent = this.language;
        return lenguaje;
    };





//This renders the "Author" of the book for every book in the BookData array
    render3() {
        const autor = document.createElement("li");
        autor.textContent = this.author;
        return autor;
    };

    getRandomBookPages(max) {
          const randompages =  Math.floor(Math.random() * 500);
          return ("Number of Pages: "+(randompages));
          
    };

    addComment(event) {
        const commentbtn = document.createElement("input");
        commentbtn.type= "text";
        commentbtn.placeholder ="Enter Comment";
        return commentbtn;
        }
    }
