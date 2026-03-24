import "./style.css";
 import chef from "./images/chef.svg";
 import lettuce from "./images/lettuce.svg";
 import martini from "./images/martini.svg";
 import grocery from "./images/grocery.svg";
 import chefoneImg from "./images/chefone.jpg";
 import cheftwoImg from "./images/cheftwo.jpg";
 import chefthreeImg from "./images/chefthree.jpg";
 import cheffourImg from "./images/cheffour.jpg";
 import resturant from "./images/resturant.jpg";

 function renderabout(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    const aboutcont = document.createElement("div");
    const about = document.createElement("div");
    const aboutname = document.createElement("h1");
    const aboutintro = document.createElement("h2");
    const aboutdesc = document.createElement("p");
    const aboutimgcont = document.createElement("div");
    const aboutimg = document.createElement("img");
    const whatwedo = document.createElement("div");
    const whatwedotext = document.createElement("h1");
    const whatcardcont = document.createElement("div");
    const whatcardone = document.createElement("div");
    const whatcardtwo = document.createElement("div");
    const whatcardthree = document.createElement("div");
    const whatcardfour = document.createElement("div");
    const imgcardone = document.createElement("img");
    const textcardonep = document.createElement("p");
    const textcardone = document.createElement("p");
    const imgcardtwo = document.createElement("img");
    const textcardtwop = document.createElement("p");
    const textcardtwo = document.createElement("p");
    const imgcardthree = document.createElement("img");
    const textcardthreep = document.createElement("p");
    const textcardthree = document.createElement("p");
    const imgcardfour = document.createElement("img");
    const textcardfourp = document.createElement("p");
    const textcardfour = document.createElement("p");
    const chefcont = document.createElement("div");
    const cheftext = document.createElement("h1");
    const chefs = document.createElement("div");
    const chefone = document.createElement("div");
    const chefoneimg = document.createElement("img");
    const chefonetext = document.createElement("div");
    const chefonename = document.createElement("h1");
    const chefonepos = document.createElement("p");
    const cheftwo = document.createElement("div");
    const cheftwoimg = document.createElement("img");
    const cheftwotext = document.createElement("div");
    const cheftwoname = document.createElement("h1");
    const cheftwopos = document.createElement("p");
    const chefthree = document.createElement("div");
    const chefthreeimg = document.createElement("img");
    const chefthreetext = document.createElement("div");
    const chefthreename = document.createElement("h1");
    const chefthreepos = document.createElement("p");
    const cheffour = document.createElement("div");
    const cheffourimg = document.createElement("img");
    const cheffourtext = document.createElement("div");
    const cheffourname = document.createElement("h1");
    const cheffourpos = document.createElement("p");



    content.appendChild(aboutcont);
    aboutcont.appendChild(about);
    about.appendChild(aboutname);
    about.appendChild(aboutintro);
    about.appendChild(aboutimgcont);
    about.appendChild(aboutdesc);
    aboutimgcont.appendChild(aboutimg);
    aboutcont.appendChild(whatwedo);
    whatwedo.appendChild(whatwedotext);
    whatwedo.appendChild(whatcardcont);
    whatcardcont.appendChild(whatcardone);
    whatcardcont.appendChild(whatcardtwo);
    whatcardcont.appendChild(whatcardthree);
    whatcardcont.appendChild(whatcardfour);
    whatcardone.appendChild(imgcardone);
    whatcardone.appendChild(textcardonep);
    whatcardone.appendChild(textcardone);
    whatcardtwo.appendChild(imgcardtwo);
     whatcardtwo.appendChild(textcardtwop);
    whatcardtwo.appendChild(textcardtwo);
    whatcardthree.appendChild(imgcardthree);
     whatcardthree.appendChild(textcardthreep);
    whatcardthree.appendChild(textcardthree);
    whatcardfour.appendChild(imgcardfour);
     whatcardfour.appendChild(textcardfourp);
    whatcardfour.appendChild(textcardfour);
    aboutcont.appendChild(chefcont);
    chefcont.appendChild(cheftext);
    chefcont.appendChild(chefs);
    chefs.appendChild(chefone);
    chefs.appendChild(cheftwo);
    chefs.appendChild(chefthree);
    chefs.appendChild(cheffour);
    chefone.appendChild(chefoneimg);
    chefone.appendChild(chefonetext);
    chefonetext.appendChild(chefonename);
    chefonetext.appendChild(chefonepos);
     cheftwo.appendChild(cheftwoimg);
    cheftwo.appendChild(cheftwotext);
    cheftwotext.appendChild(cheftwoname);
    cheftwotext.appendChild(cheftwopos);
     chefthree.appendChild(chefthreeimg);
    chefthree.appendChild(chefthreetext);
    chefthreetext.appendChild(chefthreename);
    chefthreetext.appendChild(chefthreepos);
     cheffour.appendChild(cheffourimg);
    cheffour.appendChild(cheffourtext);
    cheffourtext.appendChild(cheffourname);
    cheffourtext.appendChild(cheffourpos);
    

aboutcont.classList.add("aboutcont");
about.classList.add("about");
aboutname.classList.add("aboutname");
aboutintro.classList.add("aboutintro");
aboutdesc.classList.add("aboutdesc");
aboutimgcont.classList.add("aboutimgcont");
aboutimg.classList.add("aboutimg");
whatwedo.classList.add("whatwedo");
whatwedotext.classList.add("whatwedotext");
whatcardcont.classList.add("whatcardcont");
whatcardone.classList.add("whatcardone");
whatcardtwo.classList.add("whatcardtwo");
whatcardthree.classList.add("whatcardthree");
whatcardfour.classList.add("whatcardfour");
imgcardone.classList.add("imgcardone");
textcardone.classList.add("textcardone");
imgcardtwo.classList.add("imgcardtwo");
textcardtwo.classList.add("textcardtwo");
imgcardthree.classList.add("imgcardthree");
textcardthree.classList.add("textcardthree");
imgcardfour.classList.add("imgcardfour");
textcardfour.classList.add("textcardfour");
chefcont.classList.add("chefcont");
chefone.classList.add("chefone");
chefoneimg.classList.add("chefoneimg");
chefonetext.classList.add("chefonetext");
chefonename.classList.add("chefonename");
chefonepos.classList.add("chefonepos");
cheftwo.classList.add("cheftwo");
cheftwoimg.classList.add("cheftwoimg");
cheftwotext.classList.add("cheftwotext");
cheftwoname.classList.add("cheftwoname");
cheftwopos.classList.add("cheftwopos");
chefthree.classList.add("chefthree");
chefthreeimg.classList.add("chefthreeimg");
chefthreetext.classList.add("chefthreetext");
chefthreename.classList.add("chefthreename");
chefthreepos.classList.add("chefthreepos");
cheffour.classList.add("cheffour");
cheffourimg.classList.add("cheffourimg");
cheffourtext.classList.add("cheffourtext");
cheffourname.classList.add("cheffourname");
cheffourpos.classList.add("cheffourpos");
textcardonep.classList.add("textcardonep");
textcardtwop.classList.add("textcardtwop");
textcardthreep.classList.add("textcardthreep");
textcardfourp.classList.add("textcardfourp");
cheftext.classList.add("cheftext");
chefs.classList.add("chefs");




    aboutname.textContent = "About Us";
    aboutintro.textContent = "We Invite you to Visit Our Restuarant";
    aboutdesc.textContent = "Experience a fusion of traditional flavors and modern techniques. Join us for an unforgettable dining experience where every meal is prepared with passion and served with a smile.";

    aboutimg.src = resturant;
    aboutimg.alt = "Resturant";
    aboutimg.loading = "lazy";

    whatwedotext.textContent = "What We Do"


    imgcardone.src = grocery;
    imgcardone.alt = "fresh product";
    imgcardone.loading = "lazy";
    textcardonep.textContent = "Fresh product";
    textcardone.textContent = "We source the finest seasonal ingredients daily from local organic farms.";

    imgcardtwo.src = chef;
    imgcardtwo.alt = "Skilled Chefs";
    imgcardtwo.loading = "lazy";
    textcardtwop.textContent = "Skilled Chefs";
    textcardtwo.textContent = "Our culinary team brings years of international experience to your plate.";

    imgcardthree.src = martini;
    imgcardthree.alt = "Best Bar";
    imgcardthree.loading = "lazy";
     textcardthreep.textContent = "Best Bar";
    textcardthree.textContent = "Expertly crafted cocktails and a curated wine list for the perfect evening.";

    imgcardfour.src = lettuce;
    imgcardfour.alt = "Vegan Cusine";
    imgcardfour.loading = "lazy";
    textcardfourp.textContent = "Vegan Cusine";
    textcardfour.textContent = "Flavorful, plant-based dishes designed to satisfy every palate.";

    cheftext.textContent = "Master Chef";

    chefoneimg.src = chefoneImg;
    chefoneimg.alt = "Chef One";
    chefoneimg.loading = "lazy";
    chefonename.textContent = "Albert Manchester"
    chefonepos.textContent = "Senior Chef"

     cheftwoimg.src = cheftwoImg;
    cheftwoimg.alt = "Chef two";
    cheftwoimg.loading = "lazy";
     cheftwoname.textContent = "Jemy caroline"
    cheftwopos.textContent = "Senior Chef"

     chefthreeimg.src = chefthreeImg;
    chefthreeimg.alt = "Chef three";
    chefthreeimg.loading = "lazy";
     chefthreename.textContent = "John Doe"
    chefthreepos.textContent = "Senior Chef"

     cheffourimg.src = cheffourImg;
    cheffourimg.alt = "Chef four";
    cheffourimg.loading = "lazy";
     cheffourname.textContent = "Raya Kovin"
    cheffourpos.textContent = "Senior Chef"


    


 }
 export {renderabout};
