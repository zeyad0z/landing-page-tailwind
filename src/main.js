var html = document.getElementsByTagName("html")[0];
var dmbtn = document.getElementById("dm");

dmbtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});
