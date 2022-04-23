<?php
$input = json_decode( file_get_contents( "php://input" ), true );

require_once '../../config/database.php';
spl_autoload_register(function ($class_name) {
    require '../models/' . $class_name . '.php';
});

// Create obj product
if ( isset( $input['search_key'] ) ) {
    $key = $input['search_key'];
    $productModel = new ProductModel();
    $item = $productModel->searchProducts($key);
    echo $item = json_encode( $item );
}