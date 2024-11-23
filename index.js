let url = "https://www.google.com/search?q=";
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  if (searchInput.value != "") {
    url += searchInput.value;
    window.open(url, "_blank");
    searchInputvalue = "";
    url = "https://www.google.com/search?q=";
  }
});
// Enter tuşuna basıldığında arama butonunu tıklama
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Enter tuşu kontrolü
    const searchButton = document.querySelector(".search-btn"); // Butonu seç
    if (searchButton) {
      searchButton.click(); // Butonu tıkla
    }
  }
});
