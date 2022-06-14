<div class="product-wraper row row-cols-1 row-cols-md-3 g-4">
    @foreach($products as $product)
  <div class="col">
    <div class="card">
      <img src="{{ asset('images/' . $product->product_photo) }}" class="card-img-top product-photo" alt="..." data-product-id="{{ $product->id }}">
      <div class="card-body">
        <button class="btn btn-danger btn-like" data-url="{{ route('products.like') }}" 
        data-product-id="{{ $product->id }}">Like {{$product->likes}}</button> 
        <a href="{{ route('products.show', $product->id) }}">
          <h5 class="card-title">{{ $product->product_name }}</h5>
        </a>
        
        <p class="card-text">
        @foreach($product->categories as $category)
          <span class="badge bg-warning text-dark">{{ $category->category_name }}</span>
        @endforeach
        {{ $product->product_price }}
        </p>
      </div>
    </div>
  </div>
  @endforeach
  
</div>
<button class="btn btn-primary loadmore">Load more</button>