var menu = {
    init:function(){
        this.show();
    },
    show:function(){
        var button = document.querySelector('.header-top__btn');
        var list = document.querySelector('.header-top__menu');
        button.addEventListener("click",()=>{
            list.classList.toggle("show")
        })
    }
}
menu.init()

window.onscroll = function(){scrollmenu()}
function scrollmenu(){
    var header = document.querySelector(".header");
    var scrolling = header.getBoundingClientRect().top
    var menu = document.querySelectorAll(".link-menu")
    if(scrollY>scrolling+100){
        header.classList.add("add")
        
    }
    else{
        header.classList.remove("add")
    }
    
}
 let nav = document.querySelectorAll('.link-menu')
 let section = document.querySelectorAll('.section')
 var list = document.querySelector('.header-top__menu');
 let scrollMenu = () =>{
     for (let i = 0; i < nav.length; i++) {
         let navs = nav[i];
         let offsetTop = section[i].offsetTop
         navs.addEventListener("click",(e)=>{
            
            e.preventDefault()
            list.classList.remove("show")
            window.scrollTo(0,offsetTop-70)
         })
         if(scrollY > offsetTop - 72){
             nav.forEach(navs =>{
                 navs.classList.remove("color__active")
             })

             navs.classList.add("color__active")
         }
         else{
             navs.classList.remove("color__active")
         }
     }
 }
 window.addEventListener("scroll",scrollMenu)
 
 let img = [{
    src : "asset/images/1.jpg"
 },
 {
    src : "asset/images/2.jpg"
 },
 {
    src : "asset/images/3.jpg"
 },
 {
    src : "asset/images/4.jpg"
 },
 {
    src : "asset/images/5.jpg"
 },
 {
    src : "asset/images/6.jpg"
 }
]
let overlay=document.querySelectorAll(".portfolio-control__hover")
let modal = document.querySelector(".portfolio-modal")
let image= document.querySelector(".portfolio-modal__img")
let number=document.querySelector(".number__img")
let closeBtn=document.querySelector(".close__btn")
let nextBtn = document.querySelector(".next")
let previousBtn = document.querySelector(".previous")
let modalContent=document.querySelector(".portfolio-modal__center")
let counter = 0
let showModal =()=>{
    for (let i = 0; i < overlay.length; i++) {
        
        let overlays = overlay[i]
        overlays.addEventListener("click",()=>{
            modal.classList.add("active")
            image.src = img[i].src
            counter=i
            number.innerText=(i+1)+" of 6"
        })
    }
    
        nextBtn.addEventListener("click",()=>{
            if (counter<overlay.length-1) {
                counter++
                image.src = img[counter].src
                number.innerText=(counter+1)+" of 6"
            } else {
                counter = 0
                image.src = img[counter].src
                number.innerText=(counter+1)+" of 6"
            }
            
        })
        previousBtn.addEventListener("click",()=>{
            if (counter>0) {
                counter--
                image.src = img[counter].src
                number.innerText=(counter+1)+" of 6"
            } else {
                counter = overlay.length-1
                image.src = img[counter].src
                number.innerText=(counter+1)+" of 6"
            }
        })
    
    
    closeBtn.addEventListener("click",()=>{
        modal.classList.remove("active")
    })
    
}
showModal()
