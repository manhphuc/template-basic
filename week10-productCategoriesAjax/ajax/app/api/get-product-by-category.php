<?php
$input = json_decode( file_get_contents( "php://input" ), true );

require_once '../../config/database.php';
spl_autoload_register( function ( $class_name ) {
    require '../models/' . $class_name . '.php';
});

if ( isset( $input['categoryID'] ) ) {

    $id = $input['categoryID'];
    $productModel = new ProductModel();
    if( !empty( $id ) ) {
        $item = $productModel->getProductsByCategory( $id );
    } else {
        $item = $productModel->getProducts();
    }
    echo $item = json_encode( $item );
}