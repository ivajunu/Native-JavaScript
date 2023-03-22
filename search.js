// -----------SÖKRUTA--------

let booksearch = document.querySelector("#booksearch");
let searchbutton = document.querySelector("#searchbutton");
let bookbook = document.querySelector("#book-ul");

// ---------URL------

const urlsearch = "http://openlibrary.org/search.json?q=";

function Searchforbooks() {
  console.log("funktion");
  let searchresult = booksearch.value;

  fetch(urlsearch + searchresult)
    .then((response) => response.json())
    .then((book_result) => {
      let resultbook = book_result.docs;
      for (let n = 0; n < 2; n++) {
        let li = document.createElement("li");
        li.innerText =
          " Bok: " +
          "\n" +
          resultbook[n].title +
          "\n" +
          " Författare: " +
          "\n" +
          "(" +
          resultbook[n].author_name[0] +
          ")";

        bookbook.appendChild(li);

        console.log(resultbook[1].title);
        console.log(resultbook[1]);
      }
    });
}

searchbutton.addEventListener("click", Searchforbooks);
