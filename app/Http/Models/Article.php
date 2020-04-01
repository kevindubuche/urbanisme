<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table='articles';
    // protected $primaryKey='ID';
    // protected $guarded=[''];
    protected $fillable=['id','title','body','author','source'];
    //public $timestamps = false;
}
