<div class="row row-cols-1 row-cols-md-2 g-4">
    @foreach($products as $product)
      <div class="col">
        <div class="card">
          <img src="{{ asset( 'images/' . $product->product_photo ) }}" class="card-img-top product-photo" alt="..." data-product-id="{{ $product->id }}">
          <div class="card-body">
            <h5 class="card-title">{{ $product->product_name }}</h5>
            <p class="card-text">
{{--                <pre>--}}
{{--                    {{print_r( $product )}}}--}}
{{--                </pre>--}}
    {{--            @foreach($product->categories as $category)--}}
    {{--            <span class="badge text-bg-info">{{ $category->category_name }}</span>--}}
    {{--            @endforeach--}}
                <br>
                {{ $product->product_price }}
            </p>
          </div>
        </div>
      </div>
    @endforeach
</div>
