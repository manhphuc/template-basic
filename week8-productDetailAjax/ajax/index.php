<?php
session_start();
require_once './config/database.php';
spl_autoload_register( function ( $class_name ) {
    require './app/models/' . $class_name . '.php';
});

// Products
$productModel = new ProductModel();
$productList = $productModel->getProducts();

// Categories
$categoryModel = new CategoryModel();
$categoryList = $categoryModel->getCategories();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>img{width: 100%}</style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarAccount" aria-controls="navbarAccount" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarAccount">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <?php if(isset($_SESSION['username'])) { ?>
        <li class="nav-item" style="color: #fff">
          Xin chào, <a href="#"><?php echo $_SESSION['username']['user_username'] ?></a>
          <a href="logout.php">Logout</a>
        </li>
        <?php } else { ?>
        <li class="nav-item">
          <a class="nav-link" href="login.php">Login</a>
        </li>
        <?php  }  ?>
      </ul>
    </div>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <?php foreach ($categoryList as $cate) { ?>
        <li class="nav-item">
          <a class="nav-link" href="category.php?id=<?php echo $cate['id'] ?>"><?php echo $cate['category_name']; ?></a>
        </li>
        <?php } ?>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <div class="container">

        <div class="row">
          <div class="col-md-6">
            <div class="row">
                <!-- 1 item -->
                <?php foreach ( $productList as $item ) { ?>
                <div class="col-md-4">
                    <a data-bs-toggle="modal" data-bs-target="#product-<?php echo $item['id'] ?>" onclick="getDetailProduct( <?php echo $item['id'] ?> )"><img src="./public/images/<?php echo $item['product_photo']; ?>" alt="" class="img-fluid"></a>
                    <h3><a href="product.php?id=<?php echo $item['id'] ?>"><?php echo $item['product_name']; ?></a></h3>
                    <p class="product-price">
                        <?php echo $item['product_price']; ?>
                    </p>
                </div>
                <?php } ?>
            </div>
          </div>

<!--          <div class="col-md-6">-->
<!--                <div id="result">-->
<!---->
<!--                    <div class="spinner-border d-none loader" role="status">-->
<!--                        <span class="visually-hidden">Loading...</span>-->
<!--                    </div>-->
<!--                    <div id="ajax-show">-->
<!--                        <h2 class="product-name" id="product-name"></h2>-->
<!--                        <div id="product-image"></div>-->
<!--                        <div class="product-price" id="product-price"></div>-->
<!--                        <div class="product-description" id="product-description"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--          </div>-->

        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="productModal-id" tabindex="-1" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h6 class="modal-title" id="productModal-header"></h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <h2 class="product-name" id="product-name"></h2>
                    <div id="product-image"></div>
                    <div class="product-price" id="product-price"></div>
                    <div class="product-description" id="product-description"></div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div> <!-- End Modal -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="./public/js/ajax.js"></script>
</body>
</html>