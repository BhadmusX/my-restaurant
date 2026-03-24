import "./style.css";
import riceBowl from "./images/rice-bowl.jpg";
import { renderhome } from "./home.js";
import {rendermenu} from "./menu.js";
import { renderabout } from "./about.js";
const content = document.getElementById("content");
const header = document.querySelector("header");
const btn = document.querySelectorAll("button");
const  hamburger = document.createElement("button");
const mobilemenu = document.createElement("div");
const homeBtnMobile = document.createElement("button");
const menuBtnMobile = document.createElement("button");
const aboutBtnMobile = document.createElement("button");

homeBtnMobile.textContent = "Home";
menuBtnMobile.textContent = "Menu";
aboutBtnMobile.textContent = "About";


hamburger.innerHTML = `
<span></span>
<span></span>
<span></span>
`;

hamburger.classList.add("hamburger");
mobilemenu.classList.add("mobile-menu");

mobilemenu.appendChild(homeBtnMobile);
mobilemenu.appendChild(menuBtnMobile);
mobilemenu.appendChild(aboutBtnMobile);

header.appendChild(hamburger);
header.appendChild(mobilemenu);

homeBtnMobile.addEventListener("click", renderhome);
menuBtnMobile.addEventListener("click", rendermenu);
aboutBtnMobile.addEventListener("click", renderabout);

hamburger.addEventListener("click", () => {
    mobilemenu.classList.toggle("open");
    hamburger.classList.toggle("active");
});

btn.forEach(btn => {
    if(btn.textContent === "Home"){
        
        btn.addEventListener("click", renderhome);
}else if(btn.textContent === "Menu"){
    btn.addEventListener("click", rendermenu);
}else if(btn.textContent === "About"){
    btn.addEventListener("click", renderabout);
}
});
renderhome();


