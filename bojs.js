let timerInterval;
document.querySelector("#btn1").onclick=()=>
    Swal.fire("Hola");
document.querySelector("#btn2").onclick=()=>
Swal.fire({
    title: "Tu ere homosexual?",
    text: "Seguro?",
    icon: "si"
  });
document.querySelector("#btn3").onclick=()=>

Swal.fire({
  title: "Esto va a explotar",
  html: "En <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
document.querySelector("#btn4").onclick=()=>
Swal.fire({
    title: "Cargando",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("load-32_256.gif")
      left top
      no-repeat
    `
  });
  document.querySelector("#btn5").onclick=()=>
  Swal.fire({
    title: "Smurfut cat",
    text: "Mi idolo",
    imageUrl: "cb.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
  document.querySelector("#btn6").onclick=()=>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Perfecto vas a donar tu riñon",
    showConfirmButton: false,
    timer: 1500
  });
  document.querySelector("#btn7").onclick=()=>
  Swal.fire({
    icon: "error",
    title: "Uy no que tonto eres",
    text: "Algo salio mal en tu tonta vida",
    footer: '<a href="#"> quieres suicidarte?</a>'
  });