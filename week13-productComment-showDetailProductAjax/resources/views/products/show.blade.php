<x-layout>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="{{ asset('images/' . $product->product_photo) }}" class="card-img-top product-photo" alt="..." data-product-id="{{ $product->id }}">
            </div>
            <div class="col-md-8">
                <h1>{{ $product->product_name }}</h1>
                <p>{{ $product->product_price }}</p>
                <p>
                    {{ $product->product_description }}
                </p>

                <div class="mb-3">
                    <label for="comment_content" class="form-label">Comment</label>
                    <input type="text" class="form-control" id="comment_content" name="comment_content" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="rating" class="form-label">Rating</label>
                    <input type="number" class="form-control" id="rating" name="rating">
                </div>
                <button id="btn-comment" type="button" class="btn btn-primary" data-product-id="{{ $product->id }}" data-url="{{ route('comments.store') }}">Send</button>
            </div>
        </div>
    </div>
</x-layout>