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

/**
 * Search AJAX
 */
async function getLikeProductSearch( search_key ) {
    // const searchInput       = document.querySelector( '#searchInput' );
    // searchInput.addEventListener('keyup', async (e) => {
    //     const search_key = e.target.value.toLowerCase();
    // });
    // console.log(search_key);
    /**
     * Step 1: Prepare the URL, send data to the server, call fetch to send the request to the server
     */
    const url           = "./app/api/get-product-like-key-search.php";
    const dataSend      = {
        "search_key" : search_key
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
     * Step 3: Display on the interface
     */
    const divResultHTML       = document.querySelector( '#searchList' );
    renderSearchList( result, divResultHTML, search_key );
}

/**
 * Template product item for Search Ajax
 */
function renderSearchList( result, divResultHTML, search_key ) {
    divResultHTML.innerHTML = "";
    result.forEach(element => {
        let regexProductName = new RegExp( '(' + search_key + ')' , 'gi' );
        const productName = element.product_name.replace( regexProductName, '<b>$1</b>' );
        divResultHTML.innerHTML += `
          <a href="product.php?id=${element.id}" class="list-group-item list-group-item-action">
            <img src="./public/images/${ element.product_photo}" style="width: 50px;" />
            ${productName}
            <br /><span style="color: red">${ element.product_price}</span>
          </a>
        `;
    });
}



/**
 * Filter Ajax by Categories
 */
const checkboxCategories = document.querySelectorAll('.checkbox-categories');
checkboxCategories.forEach(element => {
    element.addEventListener( 'change' , (e) => {
        // this.value | khong dung duoc cho arrrow func
        // element.value
        // e.target.value
        getProductByCategories();
    } );
});

async function getProductByCategories() {
    
    const checkboxCategories    = document.querySelectorAll( 'input[name=checkbox-categories]:checked' );
    const checkboxCategoryIds   = [...checkboxCategories].map( el => el.value );

    /**
     * Step 1: Prepare the URL, send data to the server, call fetch to send the request to the server
     */
    const url           = "./app/api/get-product-by-category.php";
    const dataSend      = {
        categoryID  : checkboxCategoryIds
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
     * Step 3: Display on the interface
     */
    const divResultHTML         = document.querySelector( '#productList' );
    divResultHTML.innerHTML     = '';
    result.forEach( element     => {
        divResultHTML.innerHTML += `
        <div class="col-md-6">
            <a data-bs-toggle="modal" data-bs-target="#product-${element.id}" onclick="getDetailProduct( ${element.id} )"><img src="./public/images/${element.product_photo}" alt="" class="img-fluid"></a>
            <h3><a href="product.php?id=${element.id}">${element.product_name}</a></h3>
            <p class="product-price">${element.product_price}</p>
        </div>
        `;
    });
}