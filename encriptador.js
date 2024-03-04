

function encriptador(){
    
    var mensaje = document.getElementById("texto-secreto").value
    if(mensaje.length > 0){
    var transE = mensaje.replaceAll("e", "enter")
    var transI = transE.replaceAll("i", "imes")
    var transA = transI.replaceAll("a", "ai")
    var transO = transA.replaceAll("o", "ober")
    var ultimaTrans = transO.replaceAll("u", "ufat")
    console.log(ultimaTrans) 
    
    mostrarMensaje(ultimaTrans)
    }
}
function mostrarMensaje(mensaje){
 

    var container = document.querySelector("#mensaje")
    var element = container.querySelector(".procesado")
    var imagen = container.querySelector("img")
    var nuevoP = document.createElement("p")
    
    nuevoP.classList.add("procesado")
    nuevoP.innerHTML = mensaje
    if(imagen){
        container.removeChild(imagen)
    }
    if(!container.querySelector(".copiar")){
        var newButton = document.createElement("button")
        console.log("se creó")
        newButton.setAttribute("onClick", "copiarTexto()")
        newButton.classList.add("copiar")
        newButton.innerHTML = "Copiar"
        container.appendChild(newButton)
    }
   

    container.replaceChild(nuevoP, element)

}

function copiarTexto(){
    var container = document.querySelector("#mensaje")
    var imagen = container.querySelector("img")
    if(!imagen){
    
    var contenido =document.querySelector(".procesado").innerHTML
    navigator.clipboard.writeText(contenido)
    .then(text=>{
       alert("El contenido ha sido copiado")
    })
    .catch(err=>{
        console.error("error al copiar:", err)
    })
}}

function desencriptar(){
    var mensaje = document.getElementById("texto-secreto").value
    if(mensaje.length > 0){
        var transE = mensaje.replaceAll("enter", "e")
        var transI = transE.replaceAll("imes", "i")
        var transA = transI.replaceAll("ai", "a")
        var transO = transA.replaceAll("ober", "o")
        var ultimaTrans = transO.replaceAll("ufat", "u")
        console.log(ultimaTrans) 
        
        mostrarMensaje(ultimaTrans)
        }
}