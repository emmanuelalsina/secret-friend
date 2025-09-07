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
let inputNombre = document.getElementById("amigo")
let ulListaAmigos = document.getElementById("listaAmigos")
let ulresultado = document.getElementById("resultado")


function validarCampoDeTexto(){
    // document.getElementById("amigo") → busca en la página el input con id "amigo"
    // .value → obtiene el texto que escribió el usuario en ese input
    // .trim() → elimina los espacios al inicio y al final del texto para evitar errores
    let texto =inputNombre.value.trim()

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
    let nombre = inputNombre.value.toUpperCase().trim();

    //Por qué ahí: Porque queremos que la comparación de duplicados sea insensible a mayúsculas/minúsculas,
    //pero el input original ya limpio (trim) se sigue usando para mostrarlo en la lista.
    


    //Verifica si el nombre ya se ingresó y lanza una alerta 
    //return evita que el código se siga ejecutando --> evitando duplicados
    if (listaAmigos.includes(nombre)){
        alert("Nombre ya ingresado,prueba con otro");
        return ;
    }

    // Agrega el nombre limpio a la lista global de amigos
    listaAmigos.push(nombre);

    //linpia el campo de texto cada que se agrega un nombre a la lisya
    inputNombre.value = "";

    console.log("Lista actualizada:", listaAmigos); //quieres ver qué nombre se agregó y cómo queda la lista cada vez que se llama la función.
    
    // Llama a la función que se encarga de mostrar la lista completa en la página
    listaVisible()
    
    // Devuelve la lista actualizada para cualquier uso posterior si se necesitara
    return listaAmigos
    
}

//actualizar la lista visible debajo del input (limpiar el contenedor y volver a pintar los ítems)
function listaVisible(){
    
    //inner.HTML cambia el contenido del elemento HTML
    limpiarContenedor(ulListaAmigos)

    
    for (let i = 0 ; i < listaAmigos.length; i ++){
        //generas un nuevo elemento de lista en cada iteración del bucle.
        
        let amigoLi = crearElementoLista(listaAmigos[i])
        //ul → referencia directa al elemento <ul> del DOM (el contenedor donde se va a pintar la lista).//
        //Por eso, al hacer ul.appendChild(amigo) el <li> realmente aparece en la página.
        ulListaAmigos.appendChild(amigoLi)
        //listaAmigos.push(li); esto es para agregar en un array de js no en contenedor DOM
        
    }
    return listaAmigos

}


function sortearAmigo(){

   
    //inner.HTML cambia el contenido del elemento HTML
    limpiarContenedor(ulresultado)

    //evita que se sroteé con una lista vacía
    if (listaAmigos.length == 0){
        alert("No has ingresado ningún nombre")
        return ;
    }

    /*primero usaria el Math.random() y lo multiplicaría por listaAmigos.length para escalarlo al tamaño de la lista,
     pero como Math.random() genera un número decimal aleatorio,
      todo eso lo encapsularia en un Math.floor() para tranformarlo a entero*/
    //numeroAleatorio apunta a la posición dentro del array
    //genera un entero válido de 0 a length-1
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length )

    console.log("Número aleatorio generado:", numeroAleatorio); //para verificar que estás generando un índice aleatorio válido.
    
    
    //generas un nuevo <li>, que es el "papelito" donde vas a escribir el nombre del ganador.
    //Muy buena idea, así no insertas texto suelto sino un nodo de lista (nodo = cada pieza/elemento en el DOM, como <li>, <div>, etc).
    let amigoSecreto = crearElementoLista(listaAmigos[numeroAleatorio])
    //al usar listaAmigos[numeroAleatorio] estás accediendo al valor que está en esa posición,
    // que en este caso es el nombre del amigo secreto
    //aquí le pones al <li> el nombre sorteado.
    //Es decir, ya no es un <li> vacío, ahora contiene el texto del ganador.
    console.log("Amigo secreto seleccionado:", amigoSecreto.textContent); //confirmar que el nombre sorteado coincide con la posición aleatoria.

    //finalmente, pegas ese <li> dentro del <ul id="resultado">, y entonces se ve en la página.
    ulresultado.appendChild(amigoSecreto)
    
    


}

// recuerda que usa innerHTML porque se aplica sobre un nodo del DOM
function limpiarContenedor(elemento){
   elemento.innerHTML = "";

}




function crearElementoLista(texto){
    
    let elemento = document.createElement("li")

    elemento.textContent= texto
    
    return elemento

}