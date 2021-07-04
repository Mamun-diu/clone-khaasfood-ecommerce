<?php

namespace App\Http\Controllers;

use App\Models\KhaasBlog;
use App\Models\KhaasHero;
use App\Models\KhaasImage;
use App\Models\KhaasMainCategory;
use App\Models\KhaasProduct;
use App\Models\KhaasSubCategory;
use App\Models\KhaasTag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class KhaasProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $main = KhaasMainCategory::orderBy('id','DESC')->get();
        $sub = KhaasSubCategory::orderBy('id','DESC')->get();
        $tag = KhaasTag::orderBy('id','DESC')->get();
        $product = KhaasProduct::orderBy('id','DESC')->with('images','main','sub','tag')->get();
        return response()->json([
            'main' => $main,
            'sub' => $sub,
            'tag' => $tag,
            'product' => $product,
        ]);
    }
    public function getSubCategory($id){
        $sub = KhaasSubCategory::orderBy('id','DESC')->where('main_category_id',$id)->get();
        return response()->json($sub);
    }
    public function getAll(){
        $main = KhaasMainCategory::orderBy('id','DESC')->get();
        $sub = KhaasSubCategory::orderBy('id','DESC')->get();
        $tag = KhaasTag::orderBy('id','DESC')->get();
        $product = KhaasProduct::orderBy('id','DESC')->with('images','main','sub','tag')->get();
        $hero = KhaasHero::all();
        $blog = KhaasBlog::all();
        return response()->json([
            'main' => $main,
            'sub' => $sub,
            'tag' => $tag,
            'product' => $product,
            'hero' => $hero,
            'blog' => $blog,
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
        // return response()->json($request->all());
        $this->validate($request,[
            'title' => 'required|unique:khaas_products,title',
            'price' => 'required',
            'quantity' => 'required',
            'discount' => 'required',
            'description' => 'required',
            'mainId' => 'required',
            'subId' => 'required',
            'tagId' => 'required',
            'status' => 'required',
            'image1' => 'required',
            'image2' => 'required',

        ]);
        $product = new KhaasProduct();
        $product->main_category_id = $request->mainId;
        $product->sub_category_id = $request->subId;
        $product->tag_id = $request->tagId;
        $product->title = $request->title;
        $product->slug = Str::slug($request->title." ".$request->quantity);
        $product->price = $request->price;
        $product->status = $request->status;
        $product->discount = $request->discount;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->save();

        $findId = KhaasProduct::where('slug',$product->slug)->first();

        $image1 = new KhaasImage();
        $image1->product_id = $findId->id;

        $imageName = time().'_'. uniqid() .'.'.$request->image1->getClientOriginalExtension();

        $request->image1->move(public_path('/storage/admin'), $imageName);
        $image1->image = 'storage/admin/' . $imageName;
        $image1->save();

        $image2 = new KhaasImage();
        $image2->product_id = $findId->id;

        $imageName2 = time().'_'. uniqid() .'.'.$request->image2->getClientOriginalExtension();
        $request->image2->move(public_path('/storage/admin'), $imageName2);
        $image2->image = 'storage/admin/' . $imageName2;
        $image2->save();

        return response()->json(200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KhaasProduct  $khaasProduct
     * @return \Illuminate\Http\Response
     */
    public function show(KhaasProduct $khaasProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KhaasProduct  $khaasProduct
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = KhaasProduct::where('id',$id)->with('images')->first();
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KhaasProduct  $khaasProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'title' => 'required|unique:khaas_products,title,'.$id,
            'price' => 'required',
            'quantity' => 'required',
            'discount' => 'required',
            'description' => 'required',
            'mainId' => 'required',
            'subId' => 'required',
            'tagId' => 'required',
            'status' => 'required',
            // 'image1' => 'required',
            // 'image2' => 'required',

        ]);
        $product = KhaasProduct::find($id);
        $product->main_category_id = $request->mainId;
        $product->sub_category_id = $request->subId;
        $product->tag_id = $request->tagId;
        $product->title = $request->title;
        $product->slug = Str::slug($request->title." ".$request->quantity);
        $product->price = $request->price;
        $product->status = $request->status;
        $product->discount = $request->discount;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->save();

        // $findId = KhaasProduct::where('slug',$product->slug)->first();

        if($request->image1){
            $image1 = KhaasImage::where('image',$request->oldImage1)->first();
            unlink($request->oldImage1);
            // $image1->product_id = $findId->id;

            $imageName = time().'_'. uniqid() .'.'.$request->image1->getClientOriginalExtension();

            $request->image1->move(public_path('/storage/admin'), $imageName);
            $image1->image = 'storage/admin/' . $imageName;
            $image1->save();
        }

        if($request->image2){
            $image2 = KhaasImage::where('image',$request->oldImage2)->first();
            unlink($request->oldImage2);
            // $image2->product_id = $findId->id;

            $imageName2 = time().'_'. uniqid() .'.'.$request->image2->getClientOriginalExtension();
            $request->image2->move(public_path('/storage/admin'), $imageName2);
            $image2->image = 'storage/admin/' . $imageName2;
            $image2->save();
        }


        return response()->json(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KhaasProduct  $khaasProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = KhaasProduct::where('id',$id)->with('images')->first();
        // return response()->json($product->images[1]->image);
        unlink($product->images[0]->image);
        unlink($product->images[1]->image);
        $product->delete();
        return response()->json(200);
    }
}
