const selectable = document.querySelectorAll(".selectable");

const stairs1 = document.querySelectorAll(".stairs1");
const stairs2 = document.querySelectorAll(".stairs2");
const ev = document.querySelectorAll(".ev")
const libraryOrMultipurposeHall = document.querySelectorAll(".library-or-multipurpose-hall");


let clickings = null;

let clicking = null;



selectable.forEach((item)=>{
    item.addEventListener("click",()=>{

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