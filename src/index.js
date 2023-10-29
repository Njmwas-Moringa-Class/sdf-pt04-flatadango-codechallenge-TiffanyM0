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
          document.querySelector("button #buy-ticket")
        //========================================
          // buton clicks - from remeningTickets.
          //   let buyTicketButton = document.querySelector("#buy-ticket");
          //   buyTicketButton.addEventListener("click", (e) => {
          //     let ticketNumber = document.querySelector("#ticket-num");
          //     console.log(ticketNumber);
          //     // ticketNumber.value = remainingTickets - 1;
          //   });
            //   if ((remainingTickets = 0)) {
            //     newTitle.setAttribute("class", "sold-out film item");
            //   }
        });
      }
      buyTickets();
    //===================================
      //   let buyTicketButton = document.querySelector("#buy-ticket");
      //   buyTicketButton.addEventListener("click", (e) => {
      //     let ticketNumber = document.querySelector("#ticket-num").textContent;
      //     // console.log(ticketNumber);
      //     let buyTicket = ticketNumber - 1;
      //     console.log(buyTicket);
      //     ticketNumber.textContent = buyTicket;
      //     //   return buyTickets();ticket-num
      //   });
      // buy ticket click decrease remaining tickets by one on click; with 0 remainins, button disabled / read sold out
      // add class sold out to films with 0 tickets
      // let remainingTickets = `${array.capacity}` - `${array.tickets_sold}`;
    });
});

function buyTickets() {
  document.querySelector("#buy-ticket").addEventListener("click", () => {
    let numberValue = document.querySelector("#ticket-num").textContent;
    // if (numberValue > 0) {
    //   document.querySelector("#buy-ticket").textContent = "Buy Ticket";
    // }
    let click = numberValue - 1;
    if (click < 0) {
      document.querySelector("#buy-ticket").textContent = "SOLD OUT";
      let titleClass = document.getElementsByClassName("film item");
    //   console.log(titleClass);
    //   titleClass.setAttribute("class", "sold-out film item");
      disableButton();
    } else {
      document.querySelector("#ticket-num").textContent = `${click}`;
    }
  });
}

function disableButton() {
  let button = document.getElementById("buy-ticket")
  button.setAttribute("disabled", "true");
//   console.log(button);
  console.log("success");
}

function enableButton() {
    let button = document.getElementById("buy-ticket")
    button.setAttribute("enabled", "true");
    // console.log(button);
    // console.log("success");
  }