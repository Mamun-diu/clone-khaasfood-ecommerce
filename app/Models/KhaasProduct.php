<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhaasProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'main_category_id',
        'sub_category_id',
        'tag_id',
        'slug',
        'price',
        'status',
        'discount',
        'quantity',
        'description'

    ];

    public function images(){
        return $this->hasMany(KhaasImage::class,'product_id','id');
    }
    public function main(){
        return $this->hasOne(KhaasMainCategory::class,'id','main_category_id');
    }
    public function sub(){
        return $this->hasOne(KhaasSubCategory::class,'id','sub_category_id');
    }
    public function tag(){
        return $this->hasOne(KhaasTag::class, 'id','tag_id');
    }
}
