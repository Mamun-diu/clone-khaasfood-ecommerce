<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhaasSubCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'main_category_id',
        'name',
    ];
}
