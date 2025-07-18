


const selectable = document.querySelectorAll(".selectable");

const stairs1 = document.querySelectorAll(".stairs1");
const stairs2 = document.querySelectorAll(".stairs2");
const ev = document.querySelectorAll(".ev")
const libraryOrMultipurposeHall = document.querySelectorAll(".library-or-multipurpose-hall");

const pupUpButton = document.querySelector('#pop-up-button');
const popUp = document.querySelector('#pop-up');
const popUpTitle = document.querySelector('#pop-up-title');
const popUpDetail = document.querySelector('#pop-up-detail');

const searchBox = document.querySelector("#search-box");

const locationsLayout = document.querySelector("#locations-layout");

let clickings = [];

let clickingId = null;

let fetchLocations = [];

function locationOffOn(item){
    popUp.classList.remove('hidden');
    
    if(clickingId != null && clickings[0].id == "etc"){
        clickings.forEach((clicking)=>{
            clicking.setAttribute('fill','#1B4433');
        });
    }
    else if(clickingId != null){
        clickings.forEach((clicking)=>{
            clicking.setAttribute('fill','#79C498')
        });
    }


    clickingId = item.id;
    
    if(clickingId ==  "3floor-stairs1" || clickingId == "2floor-stairs1" || clickingId == "1floor-stairs1" || clickingId == "B1floor-stairs1"){
        clickings = stairs1;
    }
    else if(clickingId ==  "3floor-stairs2" || clickingId == "2floor-stairs2" || clickingId == "1floor-stairs2" || clickingId == "B1floor-stairs2"){
        clickings = stairs2;
    }
    else if(clickingId ==  "3floor-ev" || clickingId == "2floor-ev" || clickingId == "1floor-ev" || clickingId == "B1floor-ev"){
        clickings = ev;
    }
    else if(clickingId == "library" || clickingId == "multipurpose-hall"){
        clickings = libraryOrMultipurposeHall;
    }
    else{
        clickings = [item];
    }
    
    if(clickingId == "etc")
    {
        clickings.forEach((clicking)=>{
            clicking.setAttribute('fill','#2B5443')
        });
    }
    else{
        clickings.forEach((clicking)=>{
            clicking.setAttribute('fill','#99E4B8');
        });
    }
}

selectable.forEach((item)=>{
    item.addEventListener("click",async ()=>{
        locationOffOn(item);

        const res = await fetch('/search-location-click', {
		    method: 'POST',
		    headers: {
		    	'Content-Type': 'application/json'
	    	},
		    body: JSON.stringify({id:clickingId})
	    });
        //promiss 있는  
        const fetchLocationDetail = await res.json();
       

        popUpTitle.textContent = fetchLocationDetail.location_name;
        popUpDetail.textContent = fetchLocationDetail.detail;
    });
});

pupUpButton.addEventListener('click',()=>{
    popUp.classList.add('hidden');

    clickings.forEach((clicking)=>{
        clicking.setAttribute('fill','#79C498');
    });

    clickings = [];
    clickingId = null;
});

searchBox.addEventListener("keydown", async function (event){
    if(event.key == "Enter")
    {
        locationsLayout.replaceChildren();
        const res = await fetch('/search', {
		    method: 'POST',
		    headers: {
		    	'Content-Type': 'application/json'
	    	},
		    body: JSON.stringify({searching:searchBox.value})
	    });
        fetchLocations = await res.json();
        fetchLocations.forEach((item, index)=>{
            
            const div = document.createElement("div");
            div.textContent = item.location_name;
            div.dataset.index = index;
            locationsLayout.appendChild(div);

        });

        
    }   

});

locationsLayout.addEventListener("click", (e) => {
    if(e.target.tagName === 'DIV'){
        
        index = e.target.dataset.index;
        popUpTitle.textContent = fetchLocations[index].location_name;
        popUpDetail.textContent = fetchLocations[index].detail;
        
        selectable.forEach((item)=>{
            if(fetchLocations[index].id == item.id){
                locationOffOn(item);
            }
        })

        
    }
});