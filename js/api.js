class API {
    
    constructor(url) {
        this.url = url
    }
    getPokemonsURLs(rangePokemon) {
        // Construir URL
        const link = this.url + rangePokemon 
        axios.get(link)
            .then(resp => {
                // Obtener url en cada ciclo
                let urls = resp.data.results
                urls.forEach(url => {
                    // Llamar a getPokemonData
                    this.getPokemonData(url.url)
                })
            })
    }

    getPokemonData(url) {
        axios.get(url)
            .then(resp => {
                const data = resp.data
                const pokemonData = {
                    id: data.id, 
                    name: data.name, 
                    types: data.types
                }
                ui.showPokemon(pokemonData)
            })
    }

}

