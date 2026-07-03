document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});

let contenidoLista =" ";
 
db.collection("platillos").onSnapshot((datos) => {
    datos.docChanges().forEach ((registro) =>{
        if (registro.type ==="added"){
            agregarALista(registro.doc.data(),registro.doc.id)
        }
    });
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems)
});
 
function agregarALista(platillo,id){
    contenidoLista+= `<option value =' ${id}'>
    ${platillo.Nombre}
    </option>`;
    document.getElementById("ListaPlatillos").innerHTML =contenidoLista;
}

const btnPedido = document.getElementById("btnPedido");


btnPedido.addEventListener("click", () => {

    const platillo = document.getElementById("ListaPlatillos").value;
    const direccion = document.getElementById("direccion").value;

    db.collection("Pedidos").add({
        platillo: platillo,
        direccion: direccion
        
    })
    .then(() => {
        alert("Pedido realizado correctamente.");

        document.getElementById("direccion").value = "";
        document.getElementById("ListaPlatillos").selectedIndex = 0;

        M.FormSelect.init(document.querySelectorAll('select'));
    })
    .catch((error) => {
        console.error("Error al guardar el pedido:", error);
    });

});



M.AutoInit();



document.getElementById("btnUbicacion").addEventListener("click", function(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(exito, error);
}

    
});

function exito(posicion){
    let latitud = posicion.coords.latitud;
    let longitud = posicion.coords.longitud;
    fetch (`https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`,
        headers:{
        ' User-Agent': 'UberEatsLeoCUDEC (slerrckk@gmail.com)'
        }
    )


}
function error(){
    alert("no se puede ")
}










