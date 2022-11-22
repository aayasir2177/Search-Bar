(async () => {
  // Fetching Data
  const res = await fetch("https://dummyjson.com/users");
  let data = await res.json();

  // Getting Input
  let searchBar = document.querySelector("[search-bar]");

  // Getting Main Container
  let dataContainer = document.querySelector("[data-container]");

  // Getting Card Template
  let cardTemplate = document.querySelector("template").content;

  // Populating Users On Load
  window.onload = populateUsers();

  // Filtering Users
  searchBar.addEventListener("input", filterUsers);

  // Populating Users
  searchBar.addEventListener("input", populateUsers);

  // User Filter
  function filterUsers() {
    let searchTerm = searchBar.value.toLowerCase();

    let filteredUsers = data.users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm)
    );

    console.log(searchTerm);

    return filteredUsers;
  }

  // User Populator
  function populateUsers() {
    let filteredUsers = filterUsers();

    dataContainer.textContent = "";

    filteredUsers.forEach((user) => {
      let card = cardTemplate.cloneNode(true),
        cardName = card.querySelector("[card-name]"),
        cardEmail = card.querySelector("[card-email]");
      cardName = cardName.innerText = user.firstName;
      cardEmail = cardEmail.innerText = user.email;

      dataContainer.appendChild(card);

      console.log(filteredUsers);
    });
  }
})();
