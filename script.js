var darkModeSwitch = document.querySelector("#toggleButton");

darkModeSwitch.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark");
});
