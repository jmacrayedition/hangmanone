//Metodo para reemplazar 
String.prototype.replaceAt = function (index, character) { return this.substr(0, index) + character + this.substr(index + character.length); }


//Control para add una palabra
document.getElementById("add-r").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z&Ñ]/g, "");

});


//Remplaza las palabras por guiones
let palabraConGuiones = palabra.replace(/./g, "_ ");
//Muestra los guiones(palabra)
document.querySelector('#texto_pintar').innerHTML = palabraConGuiones;

//Contador de Fallas
let contarFallas = 0;

//Reemplazo de guiones por letras
document.querySelector('#add-a').addEventListener('click', () => {
    const texto = document.querySelector('#add-r').value;
    let fail = true;
    if (texto.length != 0) {


        for (const i in palabra) {
            if (texto == palabra[i]) {
                palabraConGuiones = palabraConGuiones.replaceAt(i * 2, texto);
                fail = false;
            }

        }
        if (fail) {
            contarFallas++;
            document.querySelector('#a_pintar').style.backgroundPosition = - (201 * contarFallas) + 'px 0';
            if (contarFallas == 4) {
            
                swal("Perdiste", "Juega de nuevo", "error");
                setTimeout('document.location.reload(); document.getElementById("principal").style.display = "block";  document.getElementById("secundario").style.display = "none";',5000)
     
                contarFallas = 0;
              

            }
        } else {
            if (palabraConGuiones.indexOf('_') < 0) {
                swal("Ganaste", "Juega de nuevo", "success");
                setTimeout('document.location.reload(); document.getElementById("principal").style.display = "block";  document.getElementById("secundario").style.display = "none";',5000)
     



            }
        }

        //Limpia
        document.getElementById("add-r").value = "";
        document.querySelector('#texto_pintar').innerHTML = palabraConGuiones;
    }
    else {
        console.log("Vacio");
    }

});


