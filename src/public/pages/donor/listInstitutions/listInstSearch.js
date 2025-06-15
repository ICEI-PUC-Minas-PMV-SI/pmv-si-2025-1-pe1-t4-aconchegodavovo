const cards = {
  card1: document.querySelector('#card1'),
  card2: document.querySelector('#card2'),
  card3: document.querySelector('#card3')
};

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  Object.values(cards).forEach(card => {
    const isVisible = card.textContent.toLowerCase().includes(value);
    card.classList.toggle("hide", !isVisible);
  });
});