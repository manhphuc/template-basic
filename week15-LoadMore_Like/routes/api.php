<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CommentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/product/{id}', [ProductController::class, 'show']);
Route::post('/product/show', [ProductController::class, 'show']);
Route::post('/product/like', [ProductController::class, 'like'])->name('products.like');
Route::resource('comments', CommentController::class);
Route::get('/pagination', [ProductController::class, 'loadMore']);