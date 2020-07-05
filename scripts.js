// Obtener Pokemones
async function pokemonKanto() {
    const url = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151/')
    const pokedex = await url.json()
    //console.log(pokedex.results);
    pokedex.results.forEach(pokemon => {
        //console.log(pokemon);
        pokeData(pokemon)

    })
}

async function pokeData(url) {    
    const pokeData = await axios.get(url.url)
    pokeTemplate(pokeData)   
}

function types(pokeData) {
    let types = pokeData
    let ul = document.createElement('ul')
    types.forEach(type => {
        //console.log(type.type.name);
        let li = document.createElement('li')
        li.innerHTML = type.type.name
        ul.append(li)
    })
    return ul
    //console.log(pokeData.type);
}

async function pokeTemplate(pokeData) {
    // Crear container
    let container = document.createElement('div')
    container.classList.add('col', 'mb-4')
    // Crear card
    let card = document.createElement('div')
    card.classList.add('card', 'h-100', 'p-2')
    // Agregar imagen
    let img = document.createElement('img')
    img.classList.add('card-img-top')
    img.src = `https://pokeres.bastionbot.org/images/pokemon/${pokeData['data']['id']}.png`
    card.appendChild(img)
    // Card-body
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    // Title
    let title = document.createElement('h5')
    title.innerHTML = `${pokeData['data']['id']} - ${pokeData['data']['name']}`
    // Types
    cardBody.append(title, types(pokeData['data']['types']))
    card.appendChild(cardBody)
    container.appendChild(card)
    document.getElementById('row').appendChild(container)

}




pokemonKanto()



