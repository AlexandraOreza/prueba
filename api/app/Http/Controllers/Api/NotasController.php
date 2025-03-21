<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notas;

class NotasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notas = Notas::all();
        return $notas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nota = new Notas;
        $nota -> titulo = $request -> titulo;
        $nota -> contenido = $request -> contenido;
        $nota -> save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $nota = Notas::find($id);
        return $nota;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $nota = Notas::findOrFail($id);
        $nota -> titulo = $request -> titulo;
        $nota -> contenido = $request -> contenido;
        $nota -> save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $nota = Notas::destroy($id);
        return $nota;
    }
}
