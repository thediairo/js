var num=document.querySelector("#numero");
var vern=document.querySelector("#qnum");
var bo=document.querySelector("#borrar");
var resul=document.querySelector("#imc");
var num1=document.querySelector("#peso");
var vern1=document.querySelector("#qnum2");
var tr1=document.querySelector(".Infrapeso");
var tr2=document.querySelector(".Normal");
var tr3=document.querySelector(".Sobrepeso");
var tr4=document.querySelector(".Obecidad1");
var tr5=document.querySelector(".Obecidad2");
var tr6=document.querySelector(".Obecidad3");

document.querySelector("#numero").oninput=()=>{
    resul.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
        vern.innerHTML=num.value + " kg";
    vern1.innerHTML=num1.value + " cm";
    let n=parseFloat(num.value);
    let n1=parseFloat(num1.value);
    let n3= parseFloat(n1/100);
    let n4= parseFloat(n/(n3*n3));

    
    resul.textContent=n4.toFixed(1) + "kg/m2";
    if (n4<=18.5){
        tr1.style.boxShadow= "20px " +"20px "+ "5px " + "black";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
    if (n4>=18.5 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "20px " +"20px "+ "5px " + "black";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
    if (n4>=25 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "20px " +"20px "+ "5px " + "black";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
     if ( n4>=30 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "20px " +"20px "+ "5px " + "black";
    }if (n4>=35){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "20px " +"20px "+ "5px " + "black";
    } if (n4>=40){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "20px " +"20px "+ "5px " + "black";
    }
    },2000);
}
document.querySelector("#peso").oninput=()=>{
    resul.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
        vern.innerHTML=num.value + " kg";
    vern1.innerHTML=num1.value + " cm";
    let n=parseFloat(num.value);
    let n1=parseFloat(num1.value);
    let n3= parseFloat(n1/100);
    let n4= parseFloat(n/(n3*n3));

    
    resul.textContent=n4.toFixed(1) + "kg/m2";
    if (n4<=18.5){
        tr1.style.boxShadow= "0px " +"0px "+ "5px " + "blue";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
    if (n4>=18.5 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "0px " +"0px "+ "5px " + "green";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
    if (n4>=25 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "0px " +"0px "+ "5px " + "yellow";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "";
    }
     if ( n4>=30 ){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "0px " +"0px "+ "5px " + "orange";
    }if (n4>=35){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "0px " +"0px "+ "5px " + "red";
    } if (n4>=40){
        tr1.style.boxShadow= "";
        tr2.style.boxShadow= "";
        tr3.style.boxShadow= "";
        tr4.style.boxShadow= "";
        tr5.style.boxShadow= "";
        tr6.style.boxShadow= "0px " +"0px "+ "5px " + "purple";
    }
    },2000);
}



const dibjuar=()=>{
    
}


