function toggleDropdown() {
  const dropdown = document.getElementById("userDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Fecha o dropdown se clicar fora
window.onclick = function(event) {
  const dropdown = document.getElementById("userDropdown");
  if (!event.target.closest('.user-icon') && !event.target.closest('#userDropdown')) {
    dropdown.style.display = "none";
  }
}