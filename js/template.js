function cardProducts (producto){
    return `<div class="card">
                <div class="card-image"><img src="${producto.imagen}"></div>
                <div class="card-model">${producto.modelo}</div>
                <div class="card-price">us$ ${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
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

