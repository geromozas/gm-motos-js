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

function cardCarrito (producto){
    return `<div class="card">
                <div class="card-image"><img src="${producto.imagen}"></div>
                <div class="card-model">${producto.modelo}</div>
                <div class="card-price">us$ ${producto.precio}</div>
                <div class="card-button">
                    <button onClick="eliminarDelCarrito(${producto.id})" class="button button-outline button-eliminate" title="Click para eliminar del carrito">x</button>
                </div>
            </div>`
}

