function renderizarNavbar(){
    let rutas = {
        index: 'index.html',
        galeria: 'views/galeria.html',
        presupuesto: 'views/presupuesto.html',
        contacto: 'views/contacto.html'

    }
     let rutaLogo = 'public/img/logo1.png'
     
     const navbar = document.getElementById('navbar')

     const location = window.location.pathname;

     const separarLocation = location.split('/');

     const checarSiEsViews = separarLocation.includes('views');

     if  (checarSiEsViews){
        rutas = {
              index: '../index.html',
              galeria: 'galeria.html',
              presupuesto: 'presupuesto.html',
              contacto: 'contacto.html'
        }

        rutaLogo = '../public/img/logo1.png'
    
     }

    navbar.innerHTML =
     `<nav class= "navbar navbar-expand-lg bg-light">
         <div>
            <a class="navbar-brand" href ="#">
                <img src="${rutaLogo}" alt="Bootstrap" width ="100" heigth="100">
            </a>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class ="nav-item active">
                  <a class="nav-link" href="${rutas.index}">Inicio</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="${rutas.galeria}">Galeria</a>
                
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="${rutas.presupuesto}">Presupuesto</a>
                
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="${rutas.contacto}">contacto</a>
                
                </li>

             </ul>
           
        </div>
    </nav>`
}
renderizarNavbar();