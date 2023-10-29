// Your code here
document.addEventListener("DOMContentLoaded", (e) => {
  fetch("http://localhost:3000/films/1")
    .then((resp) => resp.json())
    .then((data) => {
      let array = data;
      //   console.log(array);
      //   console.log(array.title);
      let poster = document.querySelector("#poster");
      //   console.log (poster);
      poster.setAttribute("src", `${array.poster}`);
      poster.setAttribute("alt", `${array.title}`);
      document.querySelector("#title").textContent = `${array.title}`;
      document.querySelector(
        "#runtime"
      ).textContent = `${array.runtime} minutes`;
      document.querySelector("#film-info").textContent = `${array.description}`;
      document.querySelector("#showtime").textContent = `${array.showtime}`;
      // remaining tickets = capacity - tickets sold
      let remainingTickets = `${array.capacity}` - `${array.tickets_sold}`;
      document.querySelector("#ticket-num").textContent = remainingTickets;
    });

  fetch("http://localhost:3000/films")
    .then((resp) => resp.json())
    .then((data) => {
      let films = data;
      //   console.log(films);
      for (let i = 0; i < films.length; i++) {
        // insert titles to list
        let newTitle = document.createElement("li");
        newTitle.textContent = `${films[i].title}`;
        newTitle.setAttribute("class", "film item");
        document.querySelector("#films").appendChild(newTitle);
        // add event listener to list
        newTitle.addEventListener("click", (e) => {
          let poster = document.querySelector("#poster");
          //   console.log (tester);
          poster.setAttribute("src", `${films[i].poster}`);
          poster.setAttribute("alt", `${films[i].title}`);
          document.querySelector("#title").textContent = `${films[i].title}`;
          document.querySelector(
            "#runtime"
          ).textContent = `${films[i].runtime} minutes`;
          document.querySelector(
            "#film-info"
          ).textContent = `${films[i].description}`;
          document.querySelector(
            "#showtime"
          ).textContent = `${films[i].showtime}`;
          // remaining tickets = capacity - tickets sold
          let remainingTickets =
            `${films[i].capacity}` - `${films[i].tickets_sold}`;
          document.querySelector("#ticket-num").textContent = remainingTickets;
          document.querySelector("button #buy-ticket");
          let titleClass = document.getElementsByClassName("film item");
          console.log(titleClass);
          titleClass.addEventListener("click", enableButton());
        });
      }
      buyTickets();
    });
});

function buyTickets() {
  let button = document.querySelector("#buy-ticket");
  button.addEventListener("click", () => {
    let numberValue = document.querySelector("#ticket-num").textContent;
    let click = numberValue - 1;
    if (click < 0) {
      document.querySelector("#buy-ticket").textContent = "SOLD OUT";
      disableButton();
    } else {
      document.querySelector("#ticket-num").textContent = `${click}`;
    //   document.querySelector("#buy-ticket").textContent = "Buy Ticket";
    //   enableButton();
    }
  });
}

function disableButton() {
  let button = document.getElementById("buy-ticket");
  button.setAttribute("disabled", "true");
  //   console.log(button);
  console.log("success");
}

function enableButton() {
  let button = document.getElementById("buy-ticket");
  button.setAttribute("disabled", "false");
  // console.log(button);
  console.log("success2");
}
