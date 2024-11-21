const mobileButton = document.getElementById("#mobile");

mobileButton.onclick = function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
};
