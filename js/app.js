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
});

// submit form 

document.querySelector('.drink-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const fname = document.querySelector('.input-name').value;
    const lastname = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;
    let value = ui.checkEmpty(fname, lastname, email);
    console.log(value)
    if(value){
    let customer = new Customer( fname ,lastname , email);
     ui.addCustomer(customer);
     ui.showFeedback('customer added to list', 'success');
     ui.clearFields();
    }else{
    ui.showFeedback('some form values empty', "error")
    }
})

//display modal 

const links  = document.querySelectorAll('.work-item__icon');

links.forEach( item => item.addEventListener('click', (e)=> {
    ui.showModal(e)
}))


//hide modal

document.querySelector('.work-modal__close').addEventListener('click',(e)=> {
   ui.hideModal(e);
})
}



//claer fields
UI.prototype.clearFields = function(){
     document.querySelector('.input-name').value = "";
     document.querySelector('.input-lastname').value = "";
     document.querySelector('.input-email').value ="";
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

UI.prototype.checkEmpty = (fname ,lastname ,email)=> {
    let result;
    if(fname === '' || lastname === '' || email ===''){
        result = false;
    }else {
        result = true;
    }
  return result;
}


UI.prototype.showFeedback = function(text, type) {
    const feedback = document.querySelector('.drink-form__feedback');
if(type === 'success'){
    feedback.classList.add('success');
    feedback.innerHTML = text;
    this.removeAlert('success')
}else if(type === 'error'){
   feedback.classList.add('error');
   feedback.innerHTML = text;
   this.removeAlert('error')
}
}
//remove alert
UI.prototype.removeAlert = function(type)  {
    setTimeout( function(){
    document.querySelector('.drink-form__feedback').classList.remove(type)
    }, 3000)
}


UI.prototype.addCustomer = function(customer){
    const images = [1, 2,3,4,5];
    let random = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<img src="img/person-${random}.jpeg" alt="person" class="person-thumbnail">
    <h4 class="person_name">${customer.name}</h4>
    <h4 class="person_last-name">${customer.lastname}</h4>`
    document.querySelector('.drink-card__list').appendChild(div)
     
}


//show modal

UI.prototype.showModal = function(e){
    e.preventDefault();
   if(e.target.parentElement.classList.contains('work-item__icon')){
       let id = e.target.parentElement.dataset.id;
       console.log(id);
       const modal = document.querySelector('.work-modal');
       const modalItem = document.querySelector('.work-modal__item');

       modal.classList.add('work-modal-show');
       modalItem.style.background = `url(img/work-${id}.jpeg`

   }

}


//hide modal 

UI.prototype.hideModal = function(e) {
   document.querySelector('.work-modal').classList.remove('work-modal-show')
}


function Customer( name  , lastname, email){
    this.name =name;
    this.lastname = lastname;
    this.email = email
}

