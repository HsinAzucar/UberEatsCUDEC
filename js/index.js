btnAgregarPlatilllo = document.getElementById('btnAgregarPlatillo');


document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

btnAgregarPlatilllo.addEventListener ('click',function(){
   alert('Platillo Agregado')
}); 


