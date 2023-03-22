// // ------------------URL ------

const url = "https://openlibrary.org/subjects/";

// ----------------ALLA KATEGORIER-----------------

let lovebutton = document.querySelector("#lovebutton");
let actionbutton = document.querySelector("#actionbutton");
let thrillerbutton = document.querySelector("#thrillerbutton");
let classicsbutton = document.querySelector("#classicsbutton");
let listor = document.querySelector("#love_book");

function love() {
  let listor = document.querySelector("#love_book");
  listor.innerHTML = "";
  fetch(url + "love.json")
    .then((response) => response.json())
    .then((love_result) => {
      console.log(love_result);
      let love = love_result.works;
      console.log(love.length);
      for (let n = 0; n < love.length; n++) {
        let li = document.createElement("li");
        li.classList.add("li-elements");
        li.innerText =
          " Bok: " +
          "\n" +
          love[n].title +
          "\n" +
          " Författare: " +
          "\n" +
          "(" +
          love[n].authors[0].name +
          ")";
        listor.appendChild(li);

        console.log(love[n].title);
      }
      console.log(love[1].title);
    });
}

function action() {
  fetch(url + "action.json")
    .then((response) => response.json())
    .then((action_result) => {
      let actionlista = document.querySelector("#action_book");
      actionlista.innerHTML = "";
      console.log(action_result);
      let actionbook = action_result.works;
      for (let n = 0; n < actionbook.length; n++) {
        let li = document.createElement("li");
        li.classList.add("li-elements");
        li.innerText =
          " Bok: " +
          "\n" +
          actionbook[n].title +
          "\n" +
          " Författare: " +
          "\n" +
          "(" +
          actionbook[n].authors[0].name +
          ")";
        actionlista.appendChild(li);

        console.log(actionbook[n].title);
      }
    });
}

function thriller() {
  fetch(url + "thriller.json")
    .then((response) => response.json())
    .then((thriller_result) => {
      let thrillerlista = document.querySelector("#thriller_book");
      thrillerlista.innerHTML = "";
      console.log(thriller_result);
      let thriller = thriller_result.works;
      for (let n = 0; n < thriller.length; n++) {
        let li = document.createElement("li");
        li.classList.add("li-elements");
        li.innerText =
          " Bok: " +
          "\n" +
          thriller[n].title +
          "\n" +
          " Författare: " +
          "\n" +
          "(" +
          thriller[n].authors[0].name +
          ")";
        thrillerlista.appendChild(li);
      }
      console.log(thriller);
    });
}

function classics() {
  fetch(url + "classics.json")
    .then((response) => response.json())
    .then((classics_result) => {
      let classicslista = document.querySelector("#classics_book");
      classicslista.innerHTML = "";
      console.log(classics_result);
      let classics = classics_result.works;
      for (let n = 0; n < classics.length; n++) {
        let li = document.createElement("li");
        li.classList.add("li-elements");
        li.innerText =
          " Bok: " +
          "\n" +
          classics[n].title +
          "\n" +
          " Författare: " +
          "\n" +
          "(" +
          classics[n].authors[0].name +
          ")";
        classicslista.appendChild(li);
      }
      console.log(classics);
    });
}

classicsbutton.addEventListener("click", classics);
thrillerbutton.addEventListener("click", thriller);
lovebutton.addEventListener("click", love);
actionbutton.addEventListener("click", action);
