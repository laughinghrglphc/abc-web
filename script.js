// Selecciono los h5
const titulos = document.querySelectorAll('h5')

// colores en arrays
const colores = ['green', 'blue', 'red']

 // color alestorio
function obtenerColorAleatorio() {

    // aleatorio entre 0 y 2 
    const indice = Math.floor(Math.random() * colores.length)

    return colores[indice]
}

// Recorro los h5
titulos.forEach(function(titulo) {

    // creo el evento click
    titulo.addEventListener('click', function() {

        // cambio el color
        titulo.style.color = obtenerColorAleatorio()

    })

})