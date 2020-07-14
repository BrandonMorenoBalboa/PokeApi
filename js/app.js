// Variables

const nav = document.getElementById('nav')
const api = new API('https://pokeapi.co/api/v2/pokemon/?')
const ui = new UI('https://pokeres.bastionbot.org/images/pokemon/')

// Metodos
api.getPokemonsURLs('limit=151//')


// Listeners

cargarEventListeners()

function cargarEventListeners() {
    if(nav) {
        nav.addEventListener('click', getRegion)
    }
}

function getRegion(e) {
    e.preventDefault()
    const button = e.target.classList 
    if(button.contains('region')) {
        // Borramos las tarjetas 
        ui.deletePokemons()
        // Obtenemos el rango
        const region = e.target.getAttribute('data-id')
        api.getPokemonsURLs(region)
    }
}


