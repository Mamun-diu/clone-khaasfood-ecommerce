<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhaasBlog extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'image',
        'status',
        'description',
    ];
}
