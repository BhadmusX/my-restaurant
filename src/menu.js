import beans from "./images/beans.jpg";
import jollofrice from "./images/jollofrice.jpg";
import spag from  "./images/spag.jpg";

function rendermenu() {

const content = document.getElementById("content");
const container =  document.createElement("div");
const menucont = document.createElement("div");
const menu = document.createElement("h1");
const menutext = document.createElement("p");
const menuimgcont = document.createElement("div");
const menuimgone = document.createElement("div");
const menuimgtwo = document.createElement("div");
const menuimgthree = document.createElement("div");
const imgone = document.createElement("img");
const imgonetext = document.createElement("div");
const imgonep1 = document.createElement("p");
const imgonep2 = document.createElement("p");
const imgonep3 = document.createElement("p");
const imgtwo = document.createElement("img");
const imgtwotext = document.createElement("div");
const imgtwop1 = document.createElement("p");
const imgtwop2 = document.createElement("p");
const imgtwop3 = document.createElement("p");
const imgthree = document.createElement("img");
const imgthreetext = document.createElement("div");
const imgthreep1 = document.createElement("p");
const imgthreep2 = document.createElement("p");
const imgthreep3 = document.createElement("p");



content.innerHTML = "";

content.appendChild(container);
container.appendChild(menucont);
menucont.appendChild(menu);
menucont.appendChild(menutext);
container.appendChild(menuimgcont);
menuimgcont.appendChild(menuimgone);
menuimgcont.appendChild(menuimgtwo);
menuimgcont.appendChild(menuimgthree);
menuimgone.appendChild(imgone);
imgonetext.appendChild(imgonep1);
imgonetext.appendChild(imgonep2)
imgonetext.appendChild(imgonep3);
menuimgtwo.appendChild(imgtwo);
imgtwotext.appendChild(imgtwop1);
imgtwotext.appendChild(imgtwop2);
imgtwotext.appendChild(imgtwop3);
menuimgthree.appendChild(imgthree);
imgthreetext.appendChild(imgthreep1);
imgthreetext.appendChild(imgthreep2);
imgthreetext.appendChild(imgthreep3);
menuimgone.appendChild(imgone);
menuimgtwo.appendChild(imgtwo);
menuimgthree.appendChild(imgthree);
menuimgone.appendChild(imgonetext);
menuimgtwo.appendChild(imgtwotext);
menuimgthree.appendChild(imgthreetext);



container.classList.add("menucontainer");
menucont.classList.add("menucont");
menu.classList.add("menu");
menutext.classList.add("menutext");
menuimgcont.classList.add("menuimgcont");
menuimgone.classList.add("menuimgone");
menuimgtwo.classList.add("menuimgtwo");
menuimgthree.classList.add("menuimgthree");
menuimgone.classList.add("menuimgone");
menuimgtwo.classList.add("menuimgtwo");
menuimgthree.classList.add("menuimgthree");
menuimgcont.classList.add("menuimgcont");
imgonetext.classList.add("imgonetext");
imgtwotext.classList.add("imgtwotext");
imgthreetext.classList.add("imgthreetext");
imgone.classList.add("imgone");
imgtwo.classList.add("imgtwo");
imgthree.classList.add("imgthree");
imgonep1.classList.add("imgonep1");
imgonep2.classList.add("imgonep2");
imgonep3.classList.add("imgonep3");
imgtwop1.classList.add("imgtwop1");
imgtwop2.classList.add("imgtwop2");
imgtwop3.classList.add("imgtwop3");
imgthreep1.classList.add("imgthreep1");
imgthreep2.classList.add("imgthreep2");
imgthreep3.classList.add("imgthreep3");


menu.textContent = "OUR MENU";
menutext.textContent = "A curated selection of our most beloved dishes, made with fresh, vibrant ingredients. Taste the world of flavor at Orbit's.";


imgone.src = beans;
imgone.alt = "Beans"
imgone.loading = "lazy";
imgonep1.textContent = "Beans & Plantain";
imgonep2.textContent = "$25.00"
imgonep3.textContent = "Buy Now"


imgtwo.src = jollofrice;
imgtwo.alt = "Jollof Rice"
imgtwo.loading = "lazy";
imgtwop1.textContent = "Jollof Rice";
imgtwop2.textContent = "$25.00"
imgtwop3.textContent = "Buy Now"

imgthree.src = spag;
imgthree.alt = "spaghetti"
imgthree.loading = "lazy";
imgthreep1.textContent = "Spaghetti & Chicken";
imgthreep2.textContent = "$25.00"
imgthreep3.textContent = "Buy Now"



};

export {rendermenu};



