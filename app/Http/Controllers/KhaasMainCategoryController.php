<?php

namespace App\Http\Controllers;

use App\Models\KhaasMainCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KhaasMainCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $main = KhaasMainCategory::orderBy('id','DESC')->get();
        return response()->json($main);
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
        // return response()->json($request->all());
        $this->validate($request, [
            'name' => 'required',
            'image' => 'required',
        ]);


        $main = new KhaasMainCategory();
        if($request->image){
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $main->image = 'storage/admin/' . $imageName;
        }
        $main->name = $request->name;
        $main->save();
        return response()->json(200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasMainCategory  $khaasMainCategory
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasMainCategory $khaasMainCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasMainCategory  $khaasMainCategory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $main = KhaasMainCategory::find($id);
        return response()->json($main,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasMainCategory  $khaasMainCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $this->validate($request, [
            'name' => 'required',
            // 'image' => 'required',
        ]);


        $main = KhaasMainCategory::find($id);

        if($request->image){
            unlink($main->image);
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $main->image = 'storage/admin/' . $imageName;

        }
        $main->name = $request->name;
        $main->save();
        return response()->json(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasMainCategory  $khaasMainCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $main = KhaasMainCategory::find($id);
        if($main->image){
            unlink($main->image);
        }
        $main->delete();
        return response()->json(200);


    }
}
