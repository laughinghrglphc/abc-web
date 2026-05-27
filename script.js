
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

// probando html
const abecedario = [
    { letra: "A", palabra: "avion" },
    { letra: "B", palabra: "barco" },
    { letra: "C", palabra: "casa" },
    { letra: "D", palabra: "dado" },
    { letra: "E", palabra: "elefante" },
    { letra: "F", palabra: "foca" },
    { letra: "G", palabra: "gato" },
    { letra: "H", palabra: "hipopotamo" },
    { letra: "I", palabra: "iguana" },
    { letra: "J", palabra: "jirafa" },
    { letra: "K", palabra: "koala" },
    { letra: "L", palabra: "leon" },
    { letra: "M", palabra: "montaña" },
    { letra: "N", palabra: "nube" },
    { letra: "O", palabra: "oso" },
    { letra: "P", palabra: "perro" },
    { letra: "Q", palabra: "queso" },
    { letra: "R", palabra: "raton" },
    { letra: "S", palabra: "sol" },
    { letra: "T", palabra: "tigre" },
    { letra: "U", palabra: "uva" },
    { letra: "V", palabra: "vaca" },
    { letra: "W", palabra: "waterfall" },
    { letra: "X", palabra: "xilofono" },
    { letra: "Y", palabra: "yate" },
    { letra: "Z", palabra: "zorro" }
]

const contenedor = document.querySelector("#contenedor-letras")

abecedario.forEach(item => {

    const tarjeta = document.createElement("section")

    tarjeta.classList.add("tarjeta-letra")

    tarjeta.innerHTML = `
        <h2>${item.letra}</h2>
        <img 
            src="https://loremflickr.com/320/240/${item.palabra}?random=${item.letra}"
            alt="${item.palabra}"
        >
    `

    contenedor.appendChild(tarjeta)
})