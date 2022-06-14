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
                <div>
                    <ul class="list-group" id="comments">
                        @foreach($product->comments as $comment )
                            @php
                                $stars = str_repeat('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>', $comment->rating);
                            @endphp
                        <li class="list-group-item">
                            {!! $stars !!} - {{ $comment->comment_content }}
                        </li>
                        @endforeach
                    </ul>
                </div>
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