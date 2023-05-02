"use strict"

const header = document.querySelector('header'),
titleContent = document.querySelector('.content'),
presentationChaine = document.querySelector('#presentationChaine'),
monImg = document.querySelector('#img'),
monP = document.querySelector('#p'),
main = document.querySelector('main'),
video = document.querySelector('#video'),
ytb = document.querySelector('#ytb'),
miniature = document.querySelector('#miniature'),
mentionsLegalesBtn = document.querySelector('#mentions-legales-btn'),
mentions_legales_container = document.querySelector('#mentions_legales_container'),
description = document.querySelector('#description'),
titreVid = document.querySelector('#titreVid'),
desc = document.querySelector('#desc'),
tit2 = document.querySelector('#tit2'),
reseaux = document.querySelector('#reseaux'),
contact = document.querySelector('#contact')

setInterval(() => {
  if (window.innerWidth <= 650) {
    header.style.height = "43vh"
    header.style.width = "auto"
    titleContent.style.transform = "translateY(20vh)"
    
} else if (window.innerWidth > 650) {
    header.style.height = "100vh"
    header.style.width = "100%"
    titleContent.style.transform = "translateY(calc(50vh - 4vw))"
  }

  if (window.innerWidth <= 1033) {
    presentationChaine.style.display = "block"
    //monP.style.margin = "0 auto 90px auto"
    monP.style.width = "90%"
    main.style.paddingTop = "50px"
    //monImg.style.margin = "0 auto 30px auto"
    monImg.style.display = "flex"
    monImg.style.width = "100%"
    video.style.display = "block"
    video.style.transform = "translateY(40vh)"
    ytb.style.width = "90%"
    ytb.style.margin = "calc(20vw) auto calc(20vw) auto"
    ytb.style.display = "flex"
    miniature.style.width = "90%"
    miniature.style.display = "flex"
    miniature.style.margin = "0 auto 7.5vh auto"
    description.style.transform = "translateY(calc(60vh + 35vw + 10px))"
    tit2.style.transform = "translateY(calc(320px + 6vw))"
    tit2.style.marginBottom = "-4vw"
    desc.style.transform = "translateY(calc(-100px + 20vw))"
    reseaux.style.transform = "translateY(calc(730px + 15vw))"
    contact.style.transform ="translateY(calc(950px - 15vw))"
    
} else if (window.innerWidth > 1033) {
    presentationChaine.style.display = "flex"
    //monP.style.margin = "calc(1px + 10%) 5% auto 5%"
    monP.style.width = "65%"
    main.style.paddingTop = "auto"
    //monImg.style.margin = "calc(130px + 25%) 5% 25% auto"
    monImg.style.width = "65%"
    monImg.style.display = "inline"
    video.style.display = "flex"
    video.style.transform = "translateY(14vh)"
    ytb.style.width = "35%"
    ytb.style.margin = "0 0 10px 0"
    ytb.style.display = "inline"
    miniature.style.width = "130%"
    miniature.style.display = "inline"
    miniature.style.margin = "0 0 10px -5vw"
    description.style.transform = "translateY(0)"
    tit2.style.transform = "translateY(9vh)"
    tit2.style.marginBottom = "15px"
    reseaux.style.transform = "translateY(20vw)"


  }
}, 100)



let mentions = 0;

mentionsLegalesBtn.addEventListener("click", () => {
  if (mentions == 0) {
    mentions_legales_container.style.display = "flex";
    mentions += 1;
  } else if (mentions == 1) {
    mentions_legales_container.style.display = "none";
    mentions -= 1;
  }
});