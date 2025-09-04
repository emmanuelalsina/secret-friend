// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Amigo secreto
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y 
determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar".
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y
 lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío,
 el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */



let listaAmigos = []


function validarCampoDeTexto(){
    // document.getElementById("amigo") → busca en la página el input con id "amigo"
    // .value → obtiene el texto que escribió el usuario en ese input
    // .trim() → elimina los espacios al inicio y al final del texto para evitar errores
    let texto =document.getElementById("amigo").value.trim()

    // .length → obtiene la cantidad de caracteres del texto
    // Si después de quitar los espacios no hay caracteres, es un input vacío
    if (texto.length == 0){
        // alert() → muestra una ventana emergente para avisar al usuario
        alert("Ingresa un nombre válido");
        // return false → indica que la validación falló
        return false;
        // ❓ ¿Por qué esta función devuelve "false"? 
        // Porque necesitamos una señal clara para el programa sobre si el dato es usable.
        // - true → "todo bien, continúa"
        // - false → "esto no sirve, detente"
        // Ojo: el alert() solo le habla al usuario, mientras que el return false le habla a tu código,
        // ayudándole a decidir qué hacer (seguir o detenerse).
    }else{
        return true ;
    }
}



// Función para agregar un amigo a la lista global
function agregarAmigo(){
    
    // Llama a la función que valida si el campo de texto tiene un valor
    let hayTexto = validarCampoDeTexto()
    
    // Si la validación falla (campo vacío), se detiene la ejecución de esta función
    // ❓ ¿Por qué usar return "solo" para salir? 
    // Porque return también funciona como salida temprana (guard clause).
    // No siempre se devuelve un valor para usarlo después; a veces solo se corta la ejecución.
    // En JavaScript, un simple return; termina la función y devuelve undefined.
    // Lo importante aquí es detener la función y evitar que ejecute lógica con datos inválidos.
    if (hayTexto == false){
        return;  
    }
    // Busca el input en la página con id "amigo"
    // Obtiene el texto que el usuario escribió
    // Elimina espacios al inicio y al final para evitar entradas vacías o con espacios extra
    // Guarda el resultado limpio en la variable 'nombre', lista para agregar a la lista global
    let nombre = document.getElementById("amigo").value.trim()

    // Agrega el nombre limpio a la lista global de amigos
    listaAmigos.push(nombre);
    
    // Llama a la función que se encarga de mostrar la lista completa en la página
    listaVisible()
    
    // Devuelve la lista actualizada para cualquier uso posterior si se necesitara
    return listaAmigos
    
}

//actualizar la lista visible debajo del input (limpiar el contenedor y volver a pintar los ítems)
function listaVisible(){
    //getElementById() es más seguro y explícito, porque apunta directamente al <ul> que quieres manipular,
    // sin depender del orden de los elementos en el HTML.
    let limpiarLista = getElementById("listaAmigos")
    limpiarLista.innerHTML = "";
    
    ul =document.getElementById("listaAmigos")
    for (let i = 0 ; i < listaAmigos.length; i ++){
        let amigo = document.createElement("li");
        let nombreAmigo =listaAmigos[i].textContent;

        ul.appendChild(amigo)
        //or listaAmigos.push(li); esto es para agregar en un array de js no en contenedor DOM
        
    }
    return listaAmigos

}


function sortearAmigo(){
    listaNombresAmigos.Math.random()
    console.log()

}