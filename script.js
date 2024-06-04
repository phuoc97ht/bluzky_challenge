document.getElementById("volumeSlider").addEventListener("input", function () {
  let value = this.value;
  this.style.background = `linear-gradient(to right, black ${value}%, #ccc ${value}%)`;
});
