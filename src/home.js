import "./style.css";
import riceBowl from "./images/rice-bowl.jpg";
import { rendermenu } from "./menu.js";
function renderhome() {
const content = document.getElementById("content");
content.innerHTML = "";
const container = document.createElement("div");
const textcont = document.createElement("div");
const name = document.createElement("div");
const h1  = document.createElement("h1");
const p = document.createElement("p");
const viewbtn = document.createElement("button");
const imgcont = document.createElement("div");
const img = document.createElement("img");
const orbit = document.createElement("span");


content.appendChild(container);
container.appendChild(textcont);
textcont.appendChild(name);
textcont.appendChild(imgcont);
imgcont.appendChild(img);
name.appendChild(h1);
h1.append("Flavours that ", orbit, " your Senses.");
textcont.appendChild(p);
textcont.appendChild(viewbtn);




textcont.classList.add("textcont");
container.classList.add("container");
h1.classList.add("h1");
orbit.classList.add("orbit");
p.classList.add("p");
viewbtn.classList.add("viewbtn");
imgcont.classList.add("imgcont");

orbit.textContent = "Orbit";
p.textContent = "Experience the comfort of a home-cooked meal with a modern Orbit twist. Our rice bowl brings together the finest local ingredients, from farm-fresh eggs to sun-ripened vegetables, all served over a bed of steaming, seasoned rice. It’s hearty, soulful, and made to satisfy.";
img.src = riceBowl;
img.alt = "Rice Bowl";
viewbtn.textContent = "VIEW OUR MENU";

viewbtn.addEventListener("click", rendermenu);

};
export {renderhome};
