<?php

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

    Route::prefix('admin')->group(function () {
        Route::get('/', [UserController::class, 'admin'])->name('admin');
    });
});
