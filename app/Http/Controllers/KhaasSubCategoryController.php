<?php

namespace App\Http\Controllers;

use App\Models\KhaasMainCategory;
use App\Models\KhaasSubCategory;
use Illuminate\Http\Request;

class KhaasSubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $main = KhaasMainCategory::all();
        $sub = KhaasSubCategory::with('main')->orderBy('id','DESC')->get();
        return response()->json([
            'main' => $main,
            'sub' => $sub,
        ]);
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
        $this->validate($request,[
            'subCategory' => 'required|unique:khaas_sub_categories,name',
        ]);

        $sub = new KhaasSubCategory();
        $sub->main_category_id = $request->mainCategory;
        $sub->name = $request->subCategory;
        $sub->save();
        return response()->json(200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasSubCategory  $khaasSubCategory
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasSubCategory $khaasSubCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasSubCategory  $khaasSubCategory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $sub = KhaasSubCategory::find($id);
        return response()->json($sub);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasSubCategory  $khaasSubCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'subCategory' => 'required|unique:khaas_sub_categories,name,'.$id,
        ]);

        $sub = KhaasSubCategory::find($id);
        $sub->main_category_id = $request->mainCategory;
        $sub->name = $request->subCategory;
        $sub->save();
        return response()->json(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasSubCategory  $khaasSubCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        KhaasSubCategory::destroy($id);
        return response()->json(200);
    }
}
