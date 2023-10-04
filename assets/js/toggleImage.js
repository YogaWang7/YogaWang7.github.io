document.getElementById("catToggle").addEventListener("click", function() {
  var catImage = document.getElementById("catImage");
  if (catImage.style.display === "none" || catImage.style.display === "") {
    catImage.style.display = "block";
  } else {
    catImage.style.display = "none";
  }
});
