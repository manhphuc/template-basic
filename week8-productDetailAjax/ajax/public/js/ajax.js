async function getDetailProduct( productID ) {

    /**
     * Display loader
     */
    //const loader    = document.querySelector('.loader');
    //const ajax_show = document.querySelector('#ajax-show');

    //loader.classList.remove('d-none');
    //ajax_show.style.display = "none";

    /**
     * Step 1: Prepare the URL, send data to the server, call fetch to send the request to the server
     */
    const url           = "./app/api/get-product-details.php";
    const dataSend      = {
        "product_id" : productID
    };
    const response  = await fetch( url, {
        method  : "POST",
        headers : {
            "Content-Type"  : "application/json; charset=utf-8",
            "Accept"        : "application/json; charset=utf-8"
        },
        body    : JSON.stringify( dataSend )
    } );

    /**
     * Step 2: Read the returned data
     */
    const result = await response.json();

    /**
     * Hidden loader
     */
    //loader.classList.add('d-none');
    //ajax_show.style.display = "block";

    /**
     * Step 3: Display on the interface
     * Show modal
     */
    const product_title_modal       = document.querySelector( '#productModal-header' );
    const product_name              = document.querySelector( '#product-name' );
    const product_price             = document.querySelector( '#product-price' );
    const product_description       = document.querySelector( '#product-description' );
    const product_image             = document.querySelector( '#product-image' );

    product_title_modal.innerText   = result.product_name;
    product_name.innerText          = result.product_name;
    product_description.innerText   = result.product_description;
    product_price.innerText         = result.product_price;
    product_image.innerHTML         = `<img src="./public/images/${ result.product_photo }" />`;

    const productModelId            = document.querySelector( '#productModal-id' );
    const myModal                   = new bootstrap.Modal( productModelId );
    myModal.show();
}