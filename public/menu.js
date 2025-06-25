const searchMenu = document.querySelector("#menu1");
const timeMenu = document.querySelector("#menu2");
const searchWindow = document.querySelector("#search-window");
const timeWindow = document.querySelector("#time-window");


function activate(menuToOn, menuToOff) {
    menuToOn.classList.remove('off');
    menuToOn.classList.add('on');
    menuToOff.classList.remove('on');
    menuToOff.classList.add('off');
}

searchMenu.addEventListener("click", () => {
    if(searchMenu.classList.contains('off')) {
        activate(searchMenu, timeMenu);
        searchWindow.classList.remove('hidden');
        timeWindow.classList.add('hidden');

    }
});

timeMenu.addEventListener("click", () => {
    if(timeMenu.classList.contains('off')) {
        activate(timeMenu, searchMenu);
        timeWindow.classList.remove('hidden');
        searchWindow.classList.add('hidden');
    }
});


const test = document.querySelectorAll(".selectable");
test.forEach(function (item){
    item.setAttribute('fill','#ffffff');

});