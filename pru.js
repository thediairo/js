var colo1Input=document.querySelector("#color1");
var colo2Input=document.querySelector("#color2");
color1Input.oninput=updateTableColors;
color2Input.oninput=updateTableColors;
function updateTableColors(){
    let cell=document.querySelectorAll("td");
    let color1=color1Input.value;
    let color2=color2Input.value;
    let isColor1=true;
}