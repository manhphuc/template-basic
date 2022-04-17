<?php
$input = json_decode( file_get_contents( "php://input" ), true );

require_once '../../config/database.php';
spl_autoload_register(function ($class_name) {
    require '../models/' . $class_name . '.php';
});

// Tạo đối tượng sản phẩm
if ( isset( $input['product_id'] ) ) {
    $id = $input['product_id'];
    $productModel = new ProductModel();
    $item = $productModel->getProductById($id);
    echo $item = json_encode( $item );
}