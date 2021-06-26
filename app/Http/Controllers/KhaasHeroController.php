<?php

namespace App\Http\Controllers;

use App\Models\KhaasHero;
use Illuminate\Http\Request;

class KhaasHeroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'image' => 'required',
        ]);


        $hero = new KhaasHeroController();
        if($request->image){
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $hero->image = 'storage/admin/' . $imageName;
        }
        $hero->status = $request->status;
        $hero->save();
        return response()->json(200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasHero $khaasHero)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function edit(KhaasHero $khaasHero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KhaasHero $khaasHero)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function destroy(KhaasHero $khaasHero)
    {
        //
    }
}
