const leftWindowButton = document.querySelector('#left-window-button');
const leftWindow = document.querySelector('#left-window');

leftWindowButton.addEventListener('click', () => {
    if(leftWindow.classList.contains('hidden'))
    {
        leftWindow.classList.remove('hidden');

        leftWindowButton.classList.remove('location-left');
        leftWindowButton.classList.add('location-center');
    }
    else{
        leftWindow.classList.add('hidden');

        

        leftWindowButton.classList.remove('location-center');
        leftWindowButton.classList.add('location-left');
    }

});