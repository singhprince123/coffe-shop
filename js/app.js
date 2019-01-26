//hide preloader
// all the images scripts links have finshed


///window event list

eventListener()

function eventListener(){
    const ui = new UI();
    window.addEventListener('load', ()=>{
        ui.hidePreloader();
    })

// nav btn

document.querySelector('.navBtn').addEventListener('click', ()=>{
    ui.showNav();
})

//control video
document.querySelector('.video__switch').addEventListener('click',()=>{
    ui.videoControls();
})
}


function UI(){

}
UI.prototype.hidePreloader = function(){
    document.querySelector('.preloader').style.display = "none";
}
UI.prototype.showNav = function(){
    document.querySelector('.nav').classList.toggle('nav-show')
}

UI.prototype.videoControls = function(){
    let btn = document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
       btn.classList.add('btnSlide');
       document.querySelector('.video__item').pause();
    }else {
        btn.classList.remove('btnSlide');
        document.querySelector('.video__item').play();
    }
}




