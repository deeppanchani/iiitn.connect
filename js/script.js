// const filterIcon=document.getElementById('filter_container')

function filterOpen() {
  const filterContainer = document.getElementsByClassName("hidden")[0];

  if (filterContainer.style.display === "flex") {
    filterContainer.style.display = "none";
    document.getElementsByClassName("search-wrapper")[0].style.background =
      "none";
  } else {
    filterContainer.style.display = "flex";
    document.getElementsByClassName("search-wrapper")[0].style.background =
      "#013976";
  }
}

function closeSinglePersonSection() {
  const section = document.getElementById("single-person");
  const cardsSection = document.getElementById("cards-wrapper");
  const searchBar = document.getElementsByClassName("search_bar")[0];

  section.style.display = "none";
  cardsSection.style.display = "block";
  searchBar.style.display = "block";
}

function cancelHandler() {
  document.getElementById("branch-list").value = "";
  document.getElementById("year-list").value = "";
  document.getElementById("skills-list").value = "";

  document.getElementsByClassName("hidden")[0].style.display = "none";
  document.getElementById("filtered-cards-wrapper").style.display = "none";
  document.getElementById("cards-wrapper").style.display = "block";
}

function submitHandler(e) {
  e.preventDefault();
  document.getElementById("search-bar-icon").click();
  console.log(e);
}
