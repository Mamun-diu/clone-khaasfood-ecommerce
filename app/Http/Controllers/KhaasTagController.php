<?php

namespace App\Http\Controllers;

use App\Models\KhaasTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KhaasTagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tag = KhaasTag::orderBy('id','DESC')->get();
        return response()->json($tag);
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
        $validator = Validator::make($request->all(),[
            'name' => 'required|unique:khaas_tags,name'
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ]);
        }
        $tag = new KhaasTag();
        $tag->name = $request->name;
        $tag->save();
        return response()->json([
            'status'=>'success',
            'message'=>'Tag insert successfully'
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasTag  $khaasTag
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasTag $khaasTag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasTag  $khaasTag
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tag = KhaasTag::find($id);
        if(!$tag){
            return response()->json(404);
        }
        return response()->json($tag,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasTag  $khaasTag
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|unique:khaas_tags,name,'.$id,
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ]);
        }
        $tag = KhaasTag::find($id);
        $tag->name = $request->name;
        $tag->save();
        return response()->json([
            'status'=>'success',
            'message'=>'Tag insert successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasTag  $khaasTag
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        KhaasTag::destroy($id);
        return response()->json(200);
    }
}
