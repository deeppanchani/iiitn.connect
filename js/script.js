// const filterIcon=document.getElementById('filter_container')

function filterOpen() {
  const filterContainer = document.getElementsByClassName("hidden")[0];

  if (filterContainer.style.display === "flex") {
    filterContainer.style.display = "none";
  } else {
    filterContainer.style.display = "flex";
  }
}

function closeSinglePersonSection() {
  const section = document.getElementById("single-person");
  const cardsSection = document.getElementById("cards-wrapper");

  section.style.display = "none";
  cardsSection.style.display = "block";
}
