function cardMoto (moto){
    return `<div class="card">
                <div class="card-image"><img src="${moto.imagen}"></div>
                <div class="card-marca">${moto.marca}</div>
                <div class="card-model">${moto.modelo}</div>
                <div class="card-price">$ ${moto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${moto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>` 
}

function cardCasco (casco){
    return `<div class="card">
                <div class="card-image"><img src="${casco.imagen}"></div>
                <div class="card-marca">${casco.marca}</div>
                <div class="card-model">${casco.modelo}</div>
                <div class="card-price">$ ${casco.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${casco.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>` 
}

function cardGuante (guante){
    return `<div class="card">
                <div class="card-image"><img src="${guante.imagen}"></div>
                <div class="card-marca">${guante.marca}</div>
                <div class="card-model">${guante.modelo}</div>
                <div class="card-price">$ ${guante.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${guante.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>` 
}


function retornoCardErrorHTML(){
    return `<div class="card-error">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}

