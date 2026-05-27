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
    { letra: "A", imageN: "imagenes/a.jpg" },
    { letra: "B", imagen: "imagenes/b.jpg" },
    { letra: "C", imagen: "imagenes/c.jpg" },
    { letra: "D", imagen: "imagenes/d.jpg" },
    { letra: "E", imagen: "imagenes/e.jpg" },
    { letra: "F", imagen: "imagenes/f.jpg" },
    { letra: "G", imagen: "imagenes/g.jpg" },
    { letra: "H", imagen: "imagenes/h.jpg" },
    { letra: "I", imagen: "imagenes/i.jpg" },
    { letra: "J", imagen: "imagenes/j.jpg" },
    { letra: "K", imagen: "imagenes/k.jpg" },
    { letra: "L", imagen: "imagenes/l.jpg" },
    { letra: "M", imagen: "imagenes/m.jpg" },
    { letra: "N", imagen: "imagenes/n.jpg" },
    { letra: "O", imagen: "imagenes/o.jpg" },
    { letra: "P", imagen: "imagenes/p.jpg" },
    { letra: "Q", imagen: "imagenes/q.jpg" },
    { letra: "R", imagen: "imagenes/r.jpg" },
    { letra: "S", imagen: "imagenes/s.jpg" },
    { letra: "T", imagen: "imagenes/t.jpg" },
    { letra: "U", imagen: "imagenes/u.jpg" },
    { letra: "V", imagen: "imagenes/v.jpg" },
    { letra: "W", imagen: "imagenes/w.jpg" },
    { letra: "X", imagen: "imagenes/x.jpg" },
    { letra: "Y", imagen: "imagenes/y.jpg" },
    { letra: "Z", imagen: "imagenes/z.jpg" }
]

const contenedor = document.querySelector("#contenedor-letras")

abecedario.forEach(item => {

    const tarjeta = document.createElement("section")
    tarjeta.classList.add("tarjeta-letra")

    tarjeta.innerHTML = `
        <h3>Letra ${item.letra}</h3>
        <img src="${item.imagen}" alt="Imagen ${item.letra}" width="200">
    `

    contenedor.appendChild(tarjeta)
})