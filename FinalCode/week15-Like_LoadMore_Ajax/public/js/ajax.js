const productPhoto = document.querySelectorAll('.product-photo');
productPhoto.forEach(element => {
    element.addEventListener('click', (e) => {
        getProductDetail(element.dataset.productId);
    });
});

async function getProductDetail(productId) {
    const url = './api/product/show';
    const data = { productId: productId };
    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });

    // Nhan kq & giao dien
}

const btnComment = document.querySelector('#btn-comment');
if (btnComment) {
    btnComment.addEventListener('click', function () {
        addComment(this.dataset.productId, this.dataset.url);
    });
}

async function addComment(productId, url) {
    const commentContent = document.querySelector('#comment_content');
    const rating = document.querySelector('#rating');
    const data = {
        comment_content: commentContent.value,
        product_id: productId,
        rating: rating.value
    };
    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });

    // Xử lý kết quả trả về
    const result = await response.json();
    const divComments = document.querySelector('#comments');
    divComments.innerHTML = '';
    result.forEach(element => {
        divComments.innerHTML += `
        <li class="list-group-item">
            ${element.rating} - ${element.comment_content}
        </li>
        `;
    });
    commentContent.value = '';
    rating.value = '';
}

const btnLike = document.querySelectorAll('.btn-like');
if (btnLike) {
    btnLike.forEach(element => {
        element.addEventListener('click', function () {
            console.log('aa');
            likeProduct(this.dataset.productId, this.dataset.url, this)
        });
    });
}

async function likeProduct(productId, url, button) {

    if (localStorage.getItem(productId)) {
        return;
    }

    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const data = { productId: productId };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    button.textContent = `Like ${result.likes}`
    localStorage.setItem(productId, true)
}

const btnLoadmore = document.querySelector('.loadmore');

let url = 'api/pagination?page=2';
const container = document.querySelector('.product-wraper');

btnLoadmore.addEventListener('click', async function () {
    const response = await fetch(url);
    
    // Xu ly ket qua va hien thi giao dien
    const result = await response.json();
    result.data.forEach(product => {
        container.innerHTML += `<div class="col">
        <div class="card">
          <img src="images/${product.product_photo}" class="card-img-top product-photo" alt="..." data-product-id="${product.id}">
          <div class="card-body">
            <button class="btn btn-danger btn-like" data-url="{{ route('products.like') }}" 
            data-product-id="${product.id}">Like ${product.likes}</button> 
            <a href="">
              <h5 class="card-title">${product.product_name}</h5>
            </a>
        
            <p class="card-text">${product.product_price}
        
            ${printCategory(product.categories)}
        
            </p>
          </div>
        </div>
      </div>`
    });
    url = result.next_page_url;
    if(!url) {
        this.remove();
    }
})

function printCategory(categories) {
    let html = ''
    categories.forEach(el=>{
        html+=`<span class="badge bg-warning text-dark">${el.category_name}</span>`
    });
    return html
}