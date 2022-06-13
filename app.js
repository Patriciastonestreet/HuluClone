const modal = document.querySelector('.modal');
const loginButton = document.querySelector('.login-button');
const close = document.querySelector('.close');

loginButton.addEventListener('click',openModal);
close.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
if(e.target == modal){
    closeModal()
}
}