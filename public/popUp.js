const pupUpButton = document.querySelector('#pop-up-button');
const popUp = document.querySelector('#pop-up');

pupUpButton.addEventListener('click',()=>{
    popUp.classList.add('hidden');
    pupUpButton.classList.add('hidden');

});