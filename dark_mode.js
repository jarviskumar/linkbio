const inputElement = document.querySelector(".input");
const listGroup = document.querySelectorAll(".list-group-items");
const bodyElement = document.querySelector("body");
const profilePic = document.getElementById("profilePic");
const myName = document.querySelector(".name");
const iconList = document.querySelectorAll(".icon");
const dark_status = document.getElementById("dark-mode-status");
inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputElement.checked) {
      //dark
    bodyElement.style.background = "#15202b";
    profilePic.classList.add("profile-dark");
    myName.style.color = "#559ffd";
    
    listGroup.forEach((e)=>{
        e.style.background = "#20303c";
        e.classList.remove("text-dark");
        e.style.color = "#559ffd";
    });
    iconList.forEach((icon)=>{
        icon.classList.add("icon-dark");
    });
    dark_status.style.color = "#559ffd"
    dark_status.innerText = "Dark-Mode: ON"
  } else {
      //light
    bodyElement.style.background = "#d8efd3";
    profilePic.classList.remove("profile-dark");
    myName.style.color = "#5b9670";
    listGroup.forEach((e)=>{
        e.style.background = "#98bf92";
        e.classList.add("text-dark");
    });
    iconList.forEach((icon)=>{
        icon.classList.remove("icon-dark");
    });
    dark_status.style.color = "black"
    dark_status.innerText = "Dark-Mode: OFF"
  }
}

inputElement.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}