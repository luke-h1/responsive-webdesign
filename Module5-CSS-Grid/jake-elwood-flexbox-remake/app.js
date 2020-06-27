//close nav 

const closeButton = document.querySelector(".close-nav"); 
const nav=document.querySelector(".nav"); 

closeButton.addEventListener("click", () => { 
    nav.classList.remove("navigation-open")
}); 

//open nav 

const openButton = document.querySelector(".open-nav"); 
openButton.addEventListener("click", () => { 
    nav.classList.add("navigation-open"); 
}); 