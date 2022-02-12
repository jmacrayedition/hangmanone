//Control de solo mayusculas no numeros.
document.getElementById("add").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z&Ñ]/g, "");



});
// Array de palabras
let palabras = ['CASA', 'PERRO', 'GATO', 'ELEFANTE', 'PARDO'];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
//ADD palabras
document.querySelector('#agregar-p').addEventListener('click', () => {

    let agregar = document.querySelector('#add').value;
    if (agregar.length < 4) {
        swal("Error", "Escribe una palabra de 4 letras", "error");
    }
    else {
        palabras.push(agregar);
        console.log(palabras);
        document.querySelector('#add').value = "";
    }
    //Seleccion aleatoria de la palabra

}
);

//Control de vista
document.querySelector('#iniciar-j').addEventListener('click', () => {
    document.getElementById("principal").style.display = "none";
    document.getElementById("secundario").style.display = "block";

});
