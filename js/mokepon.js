let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarjuego(){
    let seleccionarAtaque = document.getElementById('seleccion-ataque')
    seleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let seccionResultados = document.getElementById('resultadosfinales')
    seccionResultados.style.display = 'none'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('Boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('Boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonPlanta = document.getElementById('Boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}   
function seleccionarMascotaJugador(){
    let seleccionarMascota = document.getElementById('seleccionar-mascota')
    seleccionarMascota.style.display = 'none'
    let seleccionarAtaque = document.getElementById('seleccion-ataque')
    seleccionarAtaque.style.display = 'flex'
    let seccionResultados = document.getElementById('resultadosfinales')
    seccionResultados.style.display = 'flex'
    let imputRayas = document.getElementById("rayas")
    let imputLuna = document.getElementById("luna")
    let imputBolas = document.getElementById("bolas")
    let imputCortana = document.getElementById("cortana")
    let imputChampis = document.getElementById("champis")
    let imputBlanquis = document.getElementById("blanquis")
    let spanMascotaJugador= document.getElementById("mascota-jugador")
    //pinta en la consola el dato, string o variable que le pongas entre los paréntesis
    //console.log(imputRayas)
    if (imputRayas.checked) {
        spanMascotaJugador.innerHTML= 'rayas'
    } else if(imputLuna.checked) {
        spanMascotaJugador.innerHTML='luna'
    } else if(imputBolas.checked) {
        spanMascotaJugador.innerHTML='bolas'
    } else if(imputCortana.checked) {
        spanMascotaJugador.innerHTML='cortana'
    } else if(imputChampis.checked) {
        spanMascotaJugador.innerHTML='champis'
    } else if(imputBlanquis.checked) {
        spanMascotaJugador.innerHTML='blanquis'
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'rayas'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'luna'
    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'bolas'
    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'cortana'
    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'champis'
    } else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'blanquis'
    } 
}
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataquePlanta(){
    ataqueJugador = 'PLANTA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,4)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'TIERRA'
    }else if(ataqueAleatorio== 4){
        ataqueEnemigo = 'PLANTA'
    }
        combate();
}
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo === ataqueJugador) {
        crearMensaje("Empate")
    } else if(ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if(ataqueJugador === 'FUEGO' && ataqueEnemigo === 'PLANTA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'FUEGO' && ataqueEnemigo === 'AGUA') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if(ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'AGUA' && ataqueEnemigo === 'PLANTA') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if(ataqueJugador === 'AGUA' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'TIERRA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'TIERRA' && ataqueEnemigo === 'PLANTA') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if(ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } else if(ataqueJugador === 'PLANTA' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'PLANTA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador === 'PLANTA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 
    revisarVidas()
}   
function revisarVidas () {
    if (vidasJugador == 0){
        crearMensajeFinal("Felicitacions, ganaste 😃")
    }   else if(vidasEnemigo == 0){
        crearMensajeFinal("Lastima, perdiste 😅")

        }
}
function crearMensaje (resultado) {
        let sectionMensaje = document.getElementById('resultado')
        let sectionMensajeJugador = document.getElementById('ataque-del-jugador')
        let sectionMensajeEnemigo = document.getElementById('ataque-del-enemigo')

        //let notificacion = document.createElement('p')
        let nuevoMensajeJugadoro = document.createElement('p')
        let nuevoMensajeEnemigo = document.createElement('p')

        //notificacion.innerHTML = resultado
        nuevoMensajeJugadoro.innerHTML = sectionMensajeJugador
        nuevoMensajeEnemigo.innerHTML = sectionMensajeEnemigo
        
        //sectionMensaje.appendChild(notificacion)
        sectionMensajeJugador.appendChild(nuevoMensajeJugadoro)
        sectionMensajeEnemigo.appendChild(nuevoMensajeEnemigo)
}
function crearMensajeFinal (resultadoFInal) {
        let sectionMensaje = document.getElementById('resultado')
        sectionMensaje.innerHTML = resultadoFInal
    

        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
        let botonAgua = document.getElementById('Boton-agua')
        botonAgua.disabled = true
        let botonTierra = document.getElementById('Boton-tierra')
        botonTierra.disabled = true
        let botonPlanta = document.getElementById('Boton-planta')
        botonPlanta.disabled = true

        let sectionReiniciar = document.getElementById('reiniciar')
        sectionReiniciar.style.display = 'block'
}
function reiniciarJuego (){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}//funcion aleatorio
window.addEventListener("load", iniciarjuego)