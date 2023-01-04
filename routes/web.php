<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\SliderController;

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
    return view('welcome');
});


Route::resource('service', ServiceController::class);

Route::resource('pricing', PricingController::class);

Route::resource('contact', ContactController::class);

Route::resource('message', MessageController::class);

Route::resource('slider', SliderController::class);

Route::post('slider-update/{id}',[SliderController::class,'update']);


// Route::get('image',function(){
//     return view('image');
// });


// Route::resource('service', ServiceController::class);

// any route setup without home (/) route; is called base Route
Route::get('/{path?}/{paths?}', function () {
    return view('welcome');
});

// Route::get('/{path?}', function () {
//     return view('welcome');
// });

// Route::get('/{path?}', function () {
//     return view('welcome');
// })->where('path', '.*');
