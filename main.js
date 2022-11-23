let stockDeProductos = [
    {id: 1, nombre: "Par de mancuernas (10Kg)", cantidad: 1, img: './assets/mancuerna-10kg-PhotoRoom.png', tipo: "Barras o pesas", precio: 7500, stock: "disponible"},
    {id: 2, nombre: "Barra Olimpica (20Kg)",cantidad: 1, img: './assets/barra-olimpica-PhotoRoom.png', tipo: "Barras o pesas", precio: 14500, stock: "disponible"},
    {id: 3, nombre: "Bicicleta indoor",cantidad: 1, img: './assets/bici-fija-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 32500, stock: "disponible"},
    {id: 4, nombre: "Cinta para correr",cantidad: 1, img: './assets/cinta-para-correr-removebg-preview.png', tipo: "Maquinas fijas y bancos", precio: 120000, stock: "disponible"},
    {id: 5, nombre: "Barra mas par de discos (10kg)",cantidad: 1, img: './assets/barra-y-discos-PhotoRoom.png', tipo: "Barras o pesas", precio: 20540, stock: "disponible"},
    {id: 6, nombre: "Pelota fitball reforzada",cantidad: 1, img: './assets/fitball-PhotoRoom.png', tipo: "Funcional", precio: 10500, stock: "disponible"},
    {id: 7, nombre: "Kit funcional",cantidad: 1, img: './assets/combo-fit-PhotoRoom.png', tipo: "Funcional", precio: 7800, stock: "disponible"},
    {id: 8, nombre: "Set 5 bandas elasticas",cantidad: 1, img: './assets/bandas-elasticas-PhotoRoom.png', tipo: "Funcional", precio: 2400, stock: "disponible"},
    {id: 9, nombre: "Sillon para cuadriceps",cantidad: 1, img: './assets/sillon-cuadriceps-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 114000, stock: "disponible"},
    {id: 10, nombre: "Banco p/pecho plano",cantidad: 1, img: './assets/banco-pecho-plano-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 32000, stock: "disponible"},
    {id: 11, nombre: "Barra para dominadas",cantidad: 1, img: './assets/barra-dominadas-PhotoRoom.png', tipo: "Barras o pesas", precio: 15000, stock: "disponible"},
    {id: 12, nombre: "Maquina para gemelos",cantidad: 1,img: './assets/maquina-gemelos-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 187000, stock: "disponible"},
    {id: 13, nombre: "Muñequeras Crossfit",cantidad: 1, img: './assets/muñequeras-crosfit-PhotoRoom.png', tipo: "Funcional", precio: 3000, stock: "disponible"},
    {id: 14, nombre: "Tobilleras Con Peso (2kg)",cantidad: 1, img: './assets/tobilleras-PhotoRoom.png', tipo: "Funcional", precio: 1300, stock: "disponible"},
    {id: 15, nombre: "Ejercitador Abdominal De Piso",cantidad: 1, img: './assets/abs-PhotoRoom.png', tipo: "Funcional", precio: 2400, stock: "disponible"},
    {id: 16, nombre: "Multigym Ran 602",cantidad: 1, img: './assets/multigym-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 97000, stock: "disponible"},
    {id: 17, nombre: "Soga para saltar (Cable Metal)",cantidad: 1, img: './assets/soga-PhotoRoom.png', tipo: "Funcional", precio: 1860, stock: "disponible"},
    {id: 18, nombre: "Barra Pesas Romana",cantidad: 1, img: './assets/biceps-martillo-PhotoRoom.png', tipo: "Barras o pesas", precio: 11000, stock: "disponible"},
    {id: 19, nombre: "Mancuernas Y Barra + 30Kg",cantidad: 1, img: './assets/barra-macuerna-PhotoRoom.png', tipo: "Barras o pesas", precio: 18400, stock: "disponible"},
    {id: 20, nombre: "Polea Multifuncion Alta Y Baja",cantidad: 1, img: './assets/polea-PhotoRoom-PhotoRoom.png', tipo: "Maquinas fijas y bancos", precio: 27200, stock: "disponible"},
    {id: 21, nombre: "2 Agarres de Poleas",cantidad: 1, img: './assets/agarres-PhotoRoom.png', tipo: "Funcional", precio: 4000, stock: "disponible"},
    {id:22, nombre: "Suplemento de proteinas", cantidad:1, img:'./assets/proteina-PhotoRoom.png', tipo: "Suplementos", precio: 2700, stock: "disponible"},
    {id:23, nombre: "Suplemento de aminoacidos", cantidad:1, img:'./assets/aminoacidos-PhotoRoom.png', tipo: "Suplementos", precio: 2200, stock: "disponible"},
    {id:24, nombre: "Suplemento de creatina", cantidad:1, img:'./assets/creatina-PhotoRoom.png', tipo: "Suplementos", precio: 3400, stock: "disponible"},

]

const sectionCards = document.getElementById("section-cards")
const contenedorDelCarrito = document.getElementById("carrito-contenedor")
const botonVaciarCarrito = document.getElementById("vaciar-carrito")
const contadorCarrito = document.getElementById("contador-carrito")
const precioTotal = document.getElementById("preciototal")
const botonCarrito = document.getElementById("boton-carrito")
const mainCarrito = document.getElementById("main-carrito")
const divFantasma = document.getElementById("fantasma")
const aTodos = document.getElementById("todos")
const aBarrasPesas = document.getElementById("barras-pesas")
const aFuncional = document.getElementById("funcional")
const aSuplementos = document.getElementById("suplementos")
const aMaquinasBancos = document.getElementById("maquinas-bancos")
const buttonComprar = document.getElementById("button-comprar")
const buttonCerrarCarrito = document.getElementById("button-cerrar-carrito")

//toda la tienda

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonCarrito.addEventListener('click', () => {
    mainCarrito.classList.toggle("hidden-active")
    divFantasma.classList.toggle("hidden-active")
})

buttonCerrarCarrito.addEventListener('click', ()=>{
    mainCarrito.classList.add("hidden-active")
    divFantasma.classList.add("hidden-active")
})



let carrito = []


stockDeProductos.forEach((producto) =>{
    let divProduct = document.createElement('div')
    divProduct.classList.add("card")
    
    divProduct.innerHTML=
    `<h2>${producto.nombre}</h2>
    <img src="${producto.img}" alt="img-${producto.nombre}">
    <h3>Precio: AR$${producto.precio}</h3>
    <h3>stock ${producto.stock}</h3>
    <button id= agregar${producto.id} class="btn-add-cart">Agregar al carrito</button>`

    sectionCards.appendChild(divProduct)
    
    const boton2 = document.getElementById(`agregar${producto.id}`)

    boton2.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
    })

    aTodos.classList.add("active-a")

    aFuncional.addEventListener('click',() => {

        if(producto.tipo === "Funcional"){
            divProduct.classList.add("flex")
            divProduct.classList.remove("hidden-active")
        }else{
            divProduct.classList.add("hidden-active")
            divProduct.classList.remove("flex")
        }
    
        aTodos.classList.remove("active-a")
        aBarrasPesas.classList.remove("active-a")
        aMaquinasBancos.classList.remove("active-a")
        aFuncional.classList.add("active-a")
    })

    aSuplementos.addEventListener('click',() => {

        if(producto.tipo === "Suplementos"){
            divProduct.classList.add("flex")
            divProduct.classList.remove("hidden-active")
        }else{
            divProduct.classList.add("hidden-active")
            divProduct.classList.remove("flex")
        }
    
        aTodos.classList.remove("active-a")
        aBarrasPesas.classList.remove("active-a")
        aMaquinasBancos.classList.remove("active-a")
        aFuncional.classList.remove("active-a")
        aSuplementos.classList.add("active-a")
    })


aBarrasPesas.addEventListener('click',() => {

    if(producto.tipo === "Barras o pesas"){
        divProduct.classList.add("flex")
        divProduct.classList.remove("hidden-active")
    }else{
        divProduct.classList.add("hidden-active")
        divProduct.classList.remove("flex")
    }

    aTodos.classList.remove("active-a")
    aFuncional.classList.remove("active-a")
    aMaquinasBancos.classList.remove("active-a")
    aSuplementos.classList.remove("active-a")
    aBarrasPesas.classList.add("active-a")
})

aTodos.addEventListener('click',() => {

    divProduct.classList.remove("hidden-active")

    aBarrasPesas.classList.remove("active-a")
    aFuncional.classList.remove("active-a")
    aMaquinasBancos.classList.remove("active-a")
    aSuplementos.classList.remove("active-a")
    aTodos.classList.add("active-a")
})


aMaquinasBancos.addEventListener('click',() => {

    if(producto.tipo === "Maquinas fijas y bancos"){
        divProduct.classList.add("flex")
        divProduct.classList.remove("hidden-active")
    }else{
        divProduct.classList.add("hidden-active")
        divProduct.classList.remove("flex")
    }

    aTodos.classList.remove("active-a")
    aFuncional.classList.remove("active-a")
    aSuplementos.classList.remove("active-a")
    aBarrasPesas.classList.remove("active-a")
    aMaquinasBancos.classList.add("active-a")
    
})

buttonComprar.addEventListener('click', (e) =>{
    if(carrito.length === 0){
        divFantasma.innerHTML= '<p class= p-divfantasma>Seleccione por lo menos un producto.</p>'
    }else if(carrito.length >=1 && carrito.length <6){
    mainCarrito.classList.add("hidden-active")
    divFantasma.classList.remove("hidden-active")
    divFantasma.innerHTML= '<p class= p-divfantasma>¡Muchas gracias por su compra!</p>'

    actualizarCarrito()

    }
})

})


const vaciarCarrito = botonVaciarCarrito.addEventListener('click', () =>{
    carrito.length = 0
    actualizarCarrito()
})

const agregarAlCarrito = (productoId) =>{
    const existe = carrito.some(prod => prod.id === productoId)
    if(existe){
        const prod = carrito.map (prod => {
            if(prod.id === productoId){
                prod.cantidad++
            }
        })
    } else{
    const item = stockDeProductos.find((prod) => prod.id === productoId)
    carrito.push(item) 
    }
actualizarCarrito()
}



const eliminarDelCarrito = (productoId) => {
    const item = carrito.find((prod) => prod.id === productoId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    actualizarCarrito()
}


const actualizarCarrito = () => {

    
    contenedorDelCarrito.innerHTML = ""

    carrito.forEach((prod) =>{
        let div = document.createElement('div')
        div.className = ('carrito-productos')

        div.innerHTML=
        `<p class="nombre-articulo">${prod.nombre}</p>
        <div class= "divcantidad">
         <button id= buttonSumarCantidad${prod.id} class="button-i-triangle-mas"><i class="fa-solid fa-square-caret-up"></i></button>
         <p id= pcantidad${prod.id}>(${prod.cantidad})</p>
         <button id= buttonRestarCantidad${prod.id} class="button-i-triangle-menos"><i class="fa-solid fa-square-caret-down"></i></button>
        </div>
        <img class="img-articulo" src="${prod.img}" alt="">
        <p id= pprecio${prod.id} class="precio">PRECIO: AR$${prod.precio*prod.cantidad}</p>
        <button onClick = "eliminarDelCarrito(${prod.id})"  class="btn-eliminar-producto"><i class="fa-solid fa-trash"></i></button>`

        contenedorDelCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))

        const buttonSumarCantidad = document.getElementById(`buttonSumarCantidad${prod.id}`)
        const buttonRestarCantidad = document.getElementById(`buttonRestarCantidad${prod.id}`)
        
        const pPrecio = document.getElementById(`pprecio${prod.id}`)
        const pPrecioTotal = document.getElementById("preciototal")
        const pCantidad = document.getElementById(`pcantidad${prod.id}`)
        

        if(prod.cantidad<=1){
            buttonRestarCantidad.classList.add("hidden-active")
        }else{
            buttonRestarCantidad.classList.remove("hidden-active")
        }

        if(prod.cantidad>=5){
            buttonSumarCantidad.classList.add("hidden-active")
        }else{
            buttonSumarCantidad.classList.remove("hidden-active")
        }


        buttonSumarCantidad.addEventListener('click', ()=>{

            pCantidad.innerHTML= `(${prod.cantidad=prod.cantidad+1})`
            pPrecio.innerHTML= `PRECIO: AR$${prod.cantidad*prod.precio}`
            pPrecioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0)

            if(prod.cantidad<=1){
                buttonRestarCantidad.classList.add("hidden-active")
            }else{
                buttonRestarCantidad.classList.remove("hidden-active")
            }

            if(prod.cantidad>=5){
                buttonSumarCantidad.classList.add("hidden-active")
            }else{
                buttonSumarCantidad.classList.remove("hidden-active")
            }
        })
        
        buttonRestarCantidad.addEventListener('click', ()=>{
            pCantidad.innerHTML= `(${prod.cantidad=prod.cantidad-1})`
            pPrecio.innerHTML= `PRECIO: AR$(${prod.cantidad*prod.precio})`
            pPrecioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0)

            if(prod.cantidad<=1){
                buttonRestarCantidad.classList.add("hidden-active")
            }else{
                buttonRestarCantidad.classList.remove("hidden-active")
            }

            if(prod.cantidad>=5){
                buttonSumarCantidad.classList.add("hidden-active")
            }else{
                buttonSumarCantidad.classList.remove("hidden-active")
            }

        })
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0)
}



