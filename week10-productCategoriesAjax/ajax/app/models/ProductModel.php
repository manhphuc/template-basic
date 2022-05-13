<?php
class ProductModel extends Db
{
    //Lấy tất cả sản phẩm
    public function getProducts()
    {
        //2. Viết câu SQL
        $sql = parent::$connection->prepare("SELECT * FROM products");
        return parent::select($sql);
    }

    // Lấy chi tiết 1 sản phẩm theo id getProductById
    public function getProductById($id)
    {
        //2. Viết câu SQL
        $sql = parent::$connection->prepare("SELECT * FROM products WHERE id=?");
        $sql->bind_param('i', $id);
        return parent::select($sql)[0];
    }

    // Lấy chi tiết 1 sản phẩm theo danh mục
    public function getProductsByCategory( $arrCateID ) {
        //2. Viết câu SQL
        $multi_categoryID   = str_repeat( '?, ', count( $arrCateID ) - 1 ) . ' ?' ;
        $iLoop              = str_repeat( 'i', count( $arrCateID ) );
        $sql                = parent::$connection->prepare( "SELECT DISTINCT `id`, `product_name`, `product_description`, `product_price`, `product_photo` ,`product_view` FROM `products` INNER JOIN products_categories ON products.id = products_categories.product_id WHERE `category_id` IN ( $multi_categoryID )" );
        $sql->bind_param( $iLoop , ...$arrCateID );
        return parent::select( $sql );
    }

    public function addProduct($productName, $productDescription, $productPrice, $productImage)
    {
        //2. Viết câu SQL
        $sql = parent::$connection->prepare("INSERT INTO `products`(`product_name`, `product_description`, `product_price`, `product_image`) VALUES (?, ?, ?, ?)");
        $sql->bind_param('ssis', $productName, $productDescription, $productPrice, $productImage);
        return $sql->execute();
    }

    public function deleteProduct($id)
    {
        //2. Viết câu SQL
        $sql = parent::$connection->prepare("...");
        $sql->bind_param('i', );
        return $sql->execute();
    }

    public function searchProducts($keyword) {
        $sql = parent::$connection->prepare("SELECT * FROM products WHERE product_name LIKE ?");
        $search = "%{$keyword}%";
        $sql->bind_param( 's', $search );
        return parent::select($sql);
    }
}