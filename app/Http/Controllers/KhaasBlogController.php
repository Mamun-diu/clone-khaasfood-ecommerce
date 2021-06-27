<?php

namespace App\Http\Controllers;

use App\Models\KhaasBlog;
use App\Models\KhaasTag;
use Illuminate\Http\Request;

class KhaasBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blog = KhaasBlog::orderBy('id','DESC')->get();
        return response()->json($blog);
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
            'title' => 'required|unique:khaas_blogs,title',
            'description' => 'required',
        ]);

        $blog = new KhaasBlog();
        if($request->image){
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $blog->image = 'storage/admin/' . $imageName;
        }
        $blog->status = $request->status;
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->save();
        return response()->json(200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasBlog  $khaasBlog
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasBlog $khaasBlog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasBlog  $khaasBlog
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $blog = KhaasBlog::find($id);
        return response()->json($blog);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasBlog  $khaasBlog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'image' => 'sometimes',
            'title' => 'required|unique:khaas_blogs,title,'.$id,
            'description' => 'required',
        ]);


        $blog = KhaasBlog::find($id);
        // return response()->json($request->all());
        if($request->image){
            unlink($blog->image);
            $imageName = time().'_'. uniqid() .'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('/storage/admin'), $imageName);
            $blog->image = 'storage/admin/' . $imageName;
        }
        $blog->status = $request->status;
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->save();
        return response()->json(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasBlog  $khaasBlog
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = KhaasBlog::find($id);
        unlink($blog->image);
        $blog->delete();

        return response()->json(200);
    }
}
