const selectable = document.querySelectorAll(".selectable");

const stairs1 = document.querySelectorAll(".stairs1");
const stairs2 = document.querySelectorAll(".stairs2");
const ev = document.querySelectorAll(".ev")
const libraryOrMultipurposeHall = document.querySelectorAll(".library-or-multipurpose-hall");

const pupUpButton = document.querySelector('#pop-up-button');
const popUp = document.querySelector('#pop-up');
const popUpTitle = document.querySelector('#pop-up-title');
const popUpDetail = document.querySelector('#pop-up-detail');

let clickings = null;

let clickingId = null;




selectable.forEach((item)=>{
    item.addEventListener("click",()=>{
        clickingId = item.id;

        const fetchLocationDetail = fetch('/search-location-click', {
		    method: 'POST',
		    headers: {
		    	'Content-Type': 'application/json'
	    	},
		    body: JSON.stringify({id:clickingId})
	    }).then(res=>res.json());

        popUpTitle.innerText = fetchLocationDetail[0].title;
        popUpDetail.innerText = fetchLocationDetail[0].detail;

        popUp.classList.remove('hidden');

        if(clickings != null && clickings[0].id == "etc"){
            clickings.forEach((clicking)=>{
                clicking.setAttribute('fill','#1B4433');
            });
        }
        else if(clickings != null){
            clickings.forEach((clicking)=>{
                clicking.setAttribute('fill','#79C498')
            });
        }
        
        if(item.id ==  "3floor-stairs1" || item.id == "2floor-stairs1" || item.id == "1floor-stairs1" || item.id == "B1floor-stairs1"){
            clickings = stairs1;
        }
        else if(item.id ==  "3floor-stairs2" || item.id == "2floor-stairs2" || item.id == "1floor-stairs2" || item.id == "B1floor-stairs2"){
            clickings = stairs2;
        }
        else if(item.id ==  "3floor-ev" || item.id == "2floor-ev" || item.id == "1floor-ev" || item.id == "B1floor-ev"){
            clickings = ev;
        }
        else if(item.id == "library" || item.id == "multipurpose-hall"){
            clickings = libraryOrMultipurposeHall;
        }
        else{
            clickings = [item];
        }
        
        if(item.id == "etc")
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
    });
});

pupUpButton.addEventListener('click',()=>{
    popUp.classList.add('hidden');

    clickings.forEach((clicking)=>{
        clicking.setAttribute('fill','#79C498');
    });

    clickings = null;
    clickingId = null;
});

	