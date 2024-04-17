let col=document.querySelector("#columnas");
let fi=document.querySelector("#filas");
let vcol=document.querySelector("#qcolu");
let vfi=document.querySelector("#qfila");
let colo1=document.querySelector("#color1");
let colo2=document.querySelector("#color2");
let p=document.querySelector("#pru");
col.oninput=()=>{pro()};
fi.oninput=()=>{pro()};
colo1.oninput=()=>{pro()};
colo2.oninput=()=>{pro()};

const pro=()=>{
    vcol.innerHTML=col.value;
    vfi.innerHTML=fi.value;
    let table="<table  border='1'>";
    let c=col.value;
    let f=fi.value;
    let cc1=colo1.value;
    let cc2=colo2.value;
    let cell=document.querySelectorAll("td");
    let color= true;
    for(i=1; i<=c; i++){
        table+="<tr>";
        for(j=1; j<=f; j++){
            if( i % 2 ===0){
                table+="<td bgcolor=" + cc1 +">"+ j +"</td>";
            }else{
                table+="<td bgcolor=" + cc2 +">"+ j +"</td>";
            }
            }
        table+="</tr>";
    }

    
     
   
    table+="</table>";
    tab.innerHTML=table;
}