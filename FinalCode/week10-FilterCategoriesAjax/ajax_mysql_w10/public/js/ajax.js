async function getProductDetail(productId) {
    // Hiện loader
    const loader = document.querySelector('.loader');
    loader.classList.remove('d-none');

    // Bước 1: url, data, fetch
    const url = "./app/api/getproductdetail.php";
    const data = { productId: productId };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });

    // Bước 2: đọc dữ liệu trả về
    const result = await response.json();

    // Ẩn loader
    loader.classList.add('d-none');

    // Bước 3: hiển thị giao diện
    const divResult = document.querySelector('#result');
    divResult.innerHTML = `
        <h2>${result.product_name}</h2>
        <div class="product-price">${result.product_price}</div>
        <div class="product-description">${result.product_description}</div>
    `;
}

// const checkboxCategories = document.querySelectorAll('.checkbox-categories');
// checkboxCategories.forEach(element => {
//     element.addEventListener('change', (e) => {
//         // this.value khong dung duoc cho arrow function
//         // element.value
//         // e.target.value
//         getProductByCategories();
//     });
// });

const checkList = document.querySelector('.check-list');
checkList.addEventListener('click', () => getProductByCategories())


async function getProductByCategories() {
    // Hiện loader
    const loader = document.querySelector('.loader');
    loader.classList.remove('d-none');

    // let arr = [];
    // checkboxCategories.forEach(element => {
    //     if (element.checked == 1) {
    //         arr.push(element.value);
    //     }
    // });

    const checkboxCategories = document.querySelectorAll('input[name=checkbox-categories]:checked');
    const checkboxCategoryIds = [...checkboxCategories].map(el => el.value);


    // Bước 1: url, data, fetch
    const url = "./app/api/getproductsbycategories.php";
    const data = { categoryId: checkboxCategoryIds };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });

    // Bước 2: đọc dữ liệu trả về
    const result = await response.json();

    // Ẩn loader
    loader.classList.add('d-none');

    // Bước 3: hiển thị giao diện
    const divResult = document.querySelector('#product-list');
    divResult.innerHTML = '';
    result.forEach(element => {
        divResult.innerHTML += `
        <div class="col-md-4">
            <a onclick="getProductDetail(${element.id})"><img src="./public/images/${element.product_photo}" alt="" class="img-fluid"></a>
            <h3><a href="product.php?id=${element.id}">${element.product_name}</a></h3>
            <p class="product-price">
            ${element.product_price}
            </p>
        </div>
        `;
    });

}
