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
}
