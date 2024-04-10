let an=document.querySelector("#ancho");
let va=document.querySelector("#dv");
let al=document.querySelector("#alto");
let bor=document.querySelector("#anchob");
let col=document.querySelector("#color");
let colo=document.querySelector("#colorb");
let tbo=document.querySelector("#selectbor");
let ra=document.querySelector("#radio");
let ro=document.querySelector("#rota");
let tr=document.querySelector("#tras");
let tr2=document.querySelector("#tras2");
let so=document.querySelector("#som");
let soc=document.querySelector("#somc");
let sox=document.querySelector("#somx");
let soy=document.querySelector("#somy");
let sca=document.querySelector("#scale");

an.oninput=()=>{dibjuar()};
al.oninput=()=>{dibjuar()};
bor.oninput=()=>{dibjuar()};
col.oninput=()=>{dibjuar()};
colo.oninput=()=>{dibjuar()};
tbo.oninput=()=>{dibjuar()};
ra.oninput=()=>{dibjuar()};
ro.oninput=()=>{dibjuar()};
tr.oninput=()=>{dibjuar()};
tr2.oninput=()=>{dibjuar()};
so.oninput=()=>{dibjuar()};
soc.oninput=()=>{dibjuar()};
sox.oninput=()=>{dibjuar()};
soy.oninput=()=>{dibjuar()};
sca.oninput=()=>{dibjuar()};
const dibjuar=()=>{
    let a=parseInt(an.value);
    va.style.width= a + "px";
    let alto=parseInt(al.value);
    va.style.height= alto + "px";

    let t=tbo.value;
    va.style.border= t ;

    let bo=parseInt(bor.value);
    va.style.borderWidth= bo + "px";

    

    let co=col.value;
    va.style.backgroundColor= co;
    let s=parseInt(so.value);
    let sc=soc.value;
    let sx=parseInt(sox.value);
    let sy=parseInt(soy.value);

    let c=colo.value;
    va.style.borderColor= c ;

    let r=parseInt(ra.value);
    va.style.borderRadius= r + "%" ;   
    let r1=parseInt(ro.value);
    va.style.rotate= r1 + "deg" ; 

    let t1=parseInt(tr.value);
    let t2=parseInt(tr2.value);
    va.style.transform=  "translateY" + "("  + t2 + "px" + ")" + "translateX" + "("  + t1 + "px" + ")"   ;  

    let sa=parseInt(sca.value);
    va.style.transform="scale("+sa+")";
    
   
    
    
    va.style.boxShadow= sx+"px "+sy+"px "+s+"px " + sc;  

    
}