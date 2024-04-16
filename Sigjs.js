let d=document.querySelector("#dia");
let vrd=document.querySelector("#qdia");
let me=document.querySelector("#mes");
let vfe=document.querySelector("#fe");
let si=document.querySelector("#sig")
d.oninput=()=>{
    vrd.innerHTML=d.value;
    vfe.innerHTML=d.value + " de " + me.value;
    let me1= me.value;
    let d1= d.value;
    si.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
    	if (me1=="marzo" && d1 >=21 || me1=="abril" && d1<=19 ) {
            si.innerHTML="<img src='ari.jpeg'>";
        }if (me1=="abril" && d1 >=20 || me1=="mayo" && d1<=20  ) {
            si.innerHTML="<img src='ta.jpeg'>";
        }	if (me1=="mayo" && d1 >=21 || me1=="junio" && d1<=20 ) {
            si.innerHTML="<img src='ge.jpeg'>";
        }	if (me1=="junio" && d1 >=21 || me1=="julio" && d1<=22  ) {
            si.innerHTML="<img src='ca.jpeg'>";
        }if (me1=="julio" && d1 >=23 || me1=="agosto" && d1<=22  ) {
            si.innerHTML="<img src='le.jpeg'>";
        }if (me1=="agosto" && d1 >=23 || me1=="septiembre" && d1<=22  ) {
            si.innerHTML="<img src='vi.jpeg'>";
        }if (me1=="septiembre" && d1 >=23 || me1=="octubre" && d1<=22  ) {
            si.innerHTML="<img src='li.jpeg'>";
        }if (me1=="octubre" && d1 >=23 || me1=="noviembre" && d1<=21  ) {
           si.innerHTML="<img src='es.jpeg'>";
        }if (me1=="noviembre" && d1 >=22 || me1=="diciembre" && d1<=21  ) {
            si.innerHTML="<img src='sa.jpeg'>";
        }if (me1=="diciembre" && d1 >=22 || me1=="enero" && d1<=19  ) {
            si.innerHTML="<img src='ca.jpeg'>";
        }if (me1=="enero" && d1 >=20 || me1=="febrero" && d1<=18  ) {
            si.innerHTML="<img src='acu.jpeg'>";
        }if (me1=="febrero" && d1 >=19 || me1=="marzo" && d1<=20  ) {
           si.innerHTML="<img src='pi.jpeg'>";
        }

    },2000);
}
me.onchange=()=>{
    vrd.innerHTML=d.value;
    vfe.innerHTML=d.value + " de " + me.value;
    let me1= me.value;
    let d1= d.value;
    si.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
    	if (me1=="marzo" && d1 >=21 || me1=="abril" && d1<=19 ) {
            si.innerHTML="<img src='ari.jpeg'>";
        }if (me1=="abril" && d1 >=20 || me1=="mayo" && d1<=20  ) {
            si.innerHTML="<img src='ta.jpeg'>";
        }	if (me1=="mayo" && d1 >=21 || me1=="junio" && d1<=20 ) {
            si.innerHTML="<img src='ge.jpeg'>";
        }	if (me1=="junio" && d1 >=21 || me1=="julio" && d1<=22  ) {
            si.innerHTML="<img src='ca.jpeg'>";
        }if (me1=="julio" && d1 >=23 || me1=="agosto" && d1<=22  ) {
            si.innerHTML="<img src='le.jpeg'>";
        }if (me1=="agosto" && d1 >=23 || me1=="septiembre" && d1<=22  ) {
            si.innerHTML="<img src='vi.jpeg'>";
        }if (me1=="septiembre" && d1 >=23 || me1=="octubre" && d1<=22  ) {
            si.innerHTML="<img src='li.jpeg'>";
        }if (me1=="octubre" && d1 >=23 || me1=="noviembre" && d1<=21  ) {
           si.innerHTML="<img src='es.jpeg'>";
        }if (me1=="noviembre" && d1 >=22 || me1=="diciembre" && d1<=21  ) {
            si.innerHTML="<img src='sa.jpeg'>";
        }if (me1=="diciembre" && d1 >=22 || me1=="enero" && d1<=19  ) {
            si.innerHTML="<img src='ca.jpeg'>";
        }if (me1=="enero" && d1 >=20 || me1=="febrero" && d1<=18  ) {
            si.innerHTML="<img src='acu.jpeg'>";
        }if (me1=="febrero" && d1 >=19 || me1=="marzo" && d1<=20  ) {
           si.innerHTML="<img src='pi.jpeg'>";
        }

    },2000);
}


