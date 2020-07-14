class UI {

    constructor(urlImage) {
        this.img = urlImage
    }

    showPokemon(data) {

        const {id, name, types} = data
        //console.log(types[0].type.name);
        let div = document.createElement('div')
        let template = ''
        template = `
        <div class="col mb-4">
            <div class="card h-100 shadow-sm border-${types[0].type.name}">
                <div class="p-3">
                    <img class="card-img-top img-responsive" src="${this.img}${id}.png" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">N° ${id} - ${name}</h5>
                    <ul>
        `
        types.forEach(type => {
            template += `<li>${type.type.name}</li>`
        })
        template += `</ul></div>
        </div>
        </div>`
        div.innerHTML = template
        
        document.querySelector('.row').appendChild(div)
    }

    deletePokemons() {
        const cards = document.querySelector('.row')
        cards.innerHTML = ''
    }
}

