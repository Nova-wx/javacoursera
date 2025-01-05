function upDate(previewPic) {
  console.log("Image survolée :", previewPic.src);
  console.log("Texte alternatif :", previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;

  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('default-image.jpg')";

  imageDiv.textContent = "Hover over an image below to display here";
}

document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("mouseover", function () {
    upDate(this);
  });

  thumbnail.addEventListener("mouseout", unDo);
});
