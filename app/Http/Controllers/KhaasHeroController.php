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
        $hero = KhaasHero::orderBy('id','DESC')->get();
        return response()->json($hero);
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

        $heros = new KhaasHero();
        if($request->image){
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $heros->image = 'storage/admin/' . $imageName;
        }
        $heros->status = $request->status;
        $heros->save();
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
    public function edit($id)
    {
        $hero = KhaasHero::find($id);
        return response()->json($hero);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'image' => 'sometimes',
        ]);


        $heros = KhaasHero::find($id);
        // return response()->json($request->all());
        if($request->image){
            unlink($heros->image);
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $heros->image = 'storage/admin/' . $imageName;
        }
        $heros->status = $request->status;
        $heros->save();
        return response()->json(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasHero  $khaasHero
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $hero = KhaasHero::find($id);
        unlink($hero->image);
        $hero->delete();
        return response()->json(200);
    }
}
