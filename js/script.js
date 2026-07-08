/* ===========================
   Mobile Menu
=========================== */

const nav = document.querySelector("nav");

const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = "☰";

nav.appendChild(hamburger);

const menu = document.querySelector("nav ul");

hamburger.onclick = () => {
    menu.classList.toggle("show");
};


/* ===========================
   Navbar Background on Scroll
=========================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        nav.classList.add("nav-scrolled");

    }

    else{

        nav.classList.remove("nav-scrolled");

    }

});


/* ===========================
   Scroll Reveal
=========================== */

/* const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section,.feature-card,.showcase")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

}); */


/* ===========================
 Back To Top Button
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("visible");

    }

    else{

        topBtn.classList.remove("visible");

    }

});


/* ===========================
Screenshot Lightbox
=========================== */

const images=document.querySelectorAll(".showcase img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightbox.innerHTML=`<img src="${img.src}">`;

});

});

lightbox.onclick=()=>{

lightbox.classList.remove("active");

};


/* ===========================
Current Year
=========================== */

document.querySelectorAll(".year").forEach(el=>{

el.innerHTML=new Date().getFullYear();

});