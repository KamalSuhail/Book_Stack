//Selecting popup-box, popup-overlay, button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});


//Select cancel button
var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});



//Select Container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click",function(event){
    event.preventDefault();

    //Create new book element
    var div = document.createElement("div");
    div.setAttribute("class","book-container");

    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`; //template literel

    container.append(div);
    
    // Clear input fields after adding book
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Hide popup (assuming popUPOverlay and popupbox are defined elsewhere to hide the popup)
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});

//Create Delete book funtion
function deletebook(event)
{
    event.target.parentElement.remove();
}


//Cancel load of add and cancel button
// function def(event) 
// {
//     event.preventDefault()
// }