//declaramos los botones
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


btn1.addEventListener("click", () => {
    PlaySound1();
});

btn2.addEventListener("click", () => {
   PlaySound2();
});

// reemplaza esta parte con los audios que quiras
// var audio = new Audio('Aca pone el audio.mp3 o la terminacion que tenga');
PlaySound1 = function () {
    var audio = new Audio('perro.mp3');
    audio.loop = false;
    audio.play(); 
}
PlaySound2 = function () {
    var audio2 = new Audio('gato.webm');
    audio2.loop = false;
    audio2.play(); 
}