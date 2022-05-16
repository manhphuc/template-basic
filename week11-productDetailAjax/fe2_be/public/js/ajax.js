const productPhoto = document.querySelectorAll( '.product-photo' );
productPhoto.forEach(element => {
    element.addEventListener('click', () => {
        getProductDetail( element.dataset.productId );
    });
});

async function getProductDetail( productId ) {
    /**
     * Step 1: Prepare the URL, send data to the server, call fetch to send the request to the server
     */
    const url       = './api/product/' + productId;
    const response  = await fetch( url );
    console.log(response);
    /**
     * Step 2: Read the returned data
     */
    // const result = await response.json();

    /**
     * Step 3: Display on the interface
     */
    // const divResult = document.querySelector('#result-detailProduct');
    // divResult.innerHTML = `
    //     <h2>${ result.product_name }</h2>
    //     <div class="product-price">${ result.product_price }</div>
    //     <div class="product-description">${ result.product_description }</div>
    // `;
}

