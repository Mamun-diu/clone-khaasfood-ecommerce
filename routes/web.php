<?php

use App\Http\Controllers\KhaasBlogController;
use App\Http\Controllers\KhaasHeroController;
use App\Http\Controllers\KhaasImageController;
use App\Http\Controllers\KhaasMainCategoryController;
use App\Http\Controllers\KhaasProductController;
use App\Http\Controllers\KhaasSubCategoryController;
use App\Http\Controllers\KhaasTagController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/{catchall?}', function () {
    return view('home');
})->where('catchall', '(.*)');

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');

// Create route for User
Route::middleware(['auth:sanctum','verified'])->group(function(){
    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'user'])->name('user');

    });
});
// Create route for Admin
Route::middleware(['auth:sanctum','verified','authadmin'])->group(function(){

    Route::get('/admin/{catchall?}', function () {
        return view('admin.master');
    })->where('catchall', '(.*)');
    Route::prefix('admin')->group(function () {
        Route::get('/', [UserController::class, 'admin'])->name('admin');
    });
    Route::prefix('api')->group(function () {
        Route::resource('tag', KhaasTagController::class);
        Route::resource('blog', KhaasBlogController::class);
        Route::resource('hero', KhaasHeroController::class);
        Route::resource('image', KhaasImageController::class);
        Route::resource('main', KhaasMainCategoryController::class);
        Route::resource('sub', KhaasSubCategoryController::class);
        Route::resource('product', KhaasProductController::class);
        Route::get('/product/sub/{id}', [KhaasProductController::class, 'getSubCategory']);

    });
});
