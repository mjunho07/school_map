const mapMenuB1FloorButton = document.querySelector ("#map-menu-B1");
const mapMenuFirstFloorButton = document.querySelector ("#map-menu-1floor");
const mapMenuSecondFloorButton = document.querySelector ("#map-menu-2floor");
const mapMenuThirdFloorButton = document.querySelector ("#map-menu-3floor");
const mapMenuAllFloorButton = document.querySelector ("#map-menu-ALL");

const B1floor = document.querySelectorAll(".B1floor");
const firstFloor = document.querySelectorAll(".1floor");
const secondFloor = document.querySelectorAll(".2floor");
const thirdFloor = document.querySelectorAll(".3floor");

mapMenuB1FloorButton.addEventListener("click", ()=>{
    B1floor.forEach(function (item){
        item.classList.remove('hidden');

    });
    firstFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    secondFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    thirdFloor.forEach(function (item){
        item.classList.add('hidden');

    });
});

mapMenuFirstFloorButton.addEventListener("click", ()=>{
    B1floor.forEach(function (item){
        item.classList.add('hidden');

    });
    firstFloor.forEach(function (item){
        item.classList.remove('hidden');

    });
    secondFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    thirdFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    
});

mapMenuSecondFloorButton.addEventListener("click", ()=>{
    B1floor.forEach(function (item){
        item.classList.add('hidden');

    });
    firstFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    secondFloor.forEach(function (item){
        item.classList.remove('hidden');

    });
    thirdFloor.forEach(function (item){
        item.classList.add('hidden');

    });

});

mapMenuThirdFloorButton.addEventListener("click", ()=>{
    B1floor.forEach(function (item){
        item.classList.add('hidden');

    });
    firstFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    secondFloor.forEach(function (item){
        item.classList.add('hidden');

    });
    thirdFloor.forEach(function (item){
        item.classList.remove('hidden');

    });

});

mapMenuAllFloorButton.addEventListener("click", ()=>{
    B1floor.forEach(function (item){
        item.classList.remove('hidden');

    });
    firstFloor.forEach(function (item){
        item.classList.remove('hidden');

    });
    secondFloor.forEach(function (item){
        item.classList.remove('hidden');

    });
    thirdFloor.forEach(function (item){
        item.classList.remove('hidden');

    });

});

