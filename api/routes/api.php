<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NotasController;

Route::apiResource('notas', NotasController::class);
