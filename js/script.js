// const filterIcon=document.getElementById('filter_container')

function filterOpen() {
  const filterContainer = document.getElementsByClassName("hidden")[0];

  if (filterContainer.style.display === "flex") {
    filterContainer.style.display = "none";
  } else {
    filterContainer.style.display = "flex";
  }
}
