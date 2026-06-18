let contenidoLista = '';

function agregarALista(Platillo, id){
contenidoLista = `<option value='${id}'>
${platillo.Nombre}
</option>`;
document.getElementById('listaPlatillos').innerHTML =
  contenidoLista;
}












document.addEventListener('DOMContentLoaded', function() {

  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });

  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });

  const selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

});

const formPedido = document.getElementById("formPedido");

formPedido.addEventListener("submit", (e) => {
  e.preventDefault();

  const pedido = {
    platillo: document.getElementById("platilloPedido").value,
    direccion: document.getElementById("direccion").value
  };

  console.log(pedido);

  alert("Pedido guardado");
});

document.getElementById("btnCancelar")
.addEventListener("click", () => {

  document.getElementById("direccion").value = "";
  document.getElementById("platilloPedido").selectedIndex = 0;

  M.FormSelect.init(document.querySelectorAll('select'));

  const sidenav = M.Sidenav.getInstance(
    document.getElementById("side-pedido")
  );

  sidenav.close();
});