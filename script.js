var photos = [];
var fileNames = [];
var imageList = [];

var captionList = [];
var openCaption = "<figcaption class='caption'>";
var closeCaption = "</figcaption>";
var dogNames = ["Tom","Charlie","Daisy","Bella","Buddy","Max","Bailey","Lucy","Cooper","Luna"];

var openDesc = "<p class='description'>";
var closeDesc = "</p>";
var petsInfo = [] ;

var dogBreed =["Labrador Retriever","German Shepherd","Golden Retriever","Siberian Husky",
"American Bulldog","Akita","American Foxhound","Bichon Frise","Boykin Spaniel","Bull Terrier"]

for (var i = 0; i < dogNames.length; i++){
    fileNames.push("dog" + (i+1));
    photos.push("<img src='image/" + fileNames[i] + ".jpeg'>");
    captionList.push(openCaption + dogNames[i] + closeCaption);
    petsInfo.push(openDesc + dogNames[i] + " is a " + dogBreed[i] + closeDesc);
}

var petsImage = document.getElementById("petsfigure");
for (var j = 0; j < photos.length; j++) {
    var div = document.createElement("div");
    div.classList.add("petsimage");
    div.innerHTML = photos[j] + captionList[j] + petsInfo [j]; 
    petsImage.appendChild(div);
}

document.addEventListener("DOMContentLoaded", function () {
   
    var infoBox = document.getElementById("infoBox");
    var infoHeading = document.getElementById("infoHeading");
    var infoText = document.getElementById("infoText");
    var infoClose = document.getElementById("infoClose");

    // Show info box when description is clicked
    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].addEventListener("click", function () {
           
            var caption = this.previousElementSibling.innerHTML;
            var description = this.innerHTML;

          
            infoHeading.innerHTML = caption;
            infoText.innerHTML = description;

           
            infoBox.style.display = "block";
        });
    }

    infoClose.addEventListener("click", function (e) {
        e.preventDefault();
        infoBox.style.display = "none";
    });
});






