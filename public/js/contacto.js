let map;
let directionsService;
let directionsDisplay;

function initMap() {
    //vamos a definir las opciones del mapa
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.416775, lng: -3.703790 },
        zoom: 12
    });

    //servicio y visualizar de rutas
    
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
}

    //funcion para calcular la ruta
function calcularRuta() {
        const ubicacionCliente = document.getElementById('ubicacionCliente').value;

        if (!ubicacionCliente) {
            alert("Por favor, introduce una dirección.");
            return;
        }

        // vamos a calcular la ruta
        const request = {
            origin: ubicacionCliente,
            destination: 'Plaza Mayor, Madrid',
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function(result, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(result);

            } else {
                alert('Error al calcular la ruta: ' + status);
            }
        });
    
    }

    //funcion para limpiar la ruta y el mapa
    function limpiarRuta() {
        document.getElementById('ubicacionCliente').value ='';
        
        //limpiar la ruta del mapa
        if (directionsDisplay) {
            directionsDisplay.setDirections(null);
        }
        //vamos a restablecer el mapa a su ubicacion inicial    
        map.setCenter({ lat: 40.416775, lng: -3.703790 });
        map.setZoom(12);
    }

    //Inicializar el mapa 
    window.onload = initMap;




initMap();
calcularRuta();
limpiarRuta();
