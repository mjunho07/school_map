const leftWindowButton = document.querySelector('#left-window-button');
const leftWindow = document.querySelector('#left-window');
const icons = document.querySelector('#icons');
const map = document.querySelector('#map');

leftWindowButton.addEventListener('click', () => {
    //버튼 클릭했을 때 left window가 닫혀있는 상태
    if(leftWindow.classList.contains('hidden'))
    {
        leftWindow.classList.remove('hidden');

        leftWindowButton.classList.remove('location-left');
        leftWindowButton.classList.add('location-center');


        icons.classList.remove('icons-and-map-left-win-off');
        icons.classList.add('icons-and-map-left-win-on');

        map.classList.remove('icons-and-map-left-win-off');
        map.classList.add('icons-and-map-left-win-on');
    }
    else{
        leftWindow.classList.add('hidden');

        

        leftWindowButton.classList.remove('location-center');
        leftWindowButton.classList.add('location-left');

        icons.classList.remove('icons-and-map-left-win-on');
        icons.classList.add('icons-and-map-left-win-off');

        map.classList.remove('icons-and-map-left-win-on');
        map.classList.add('icons-and-map-left-win-off');
    }

});