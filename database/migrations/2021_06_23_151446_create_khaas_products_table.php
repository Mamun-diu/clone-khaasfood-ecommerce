<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKhaasProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khaas_products', function (Blueprint $table) {

            $table->id();
            $table->unsignedBigInteger('main_category_id');
            $table->unsignedBigInteger('sub_category_id');
            $table->unsignedBigInteger('tag_id');
            $table->string('title');
            $table->string('slug');
            $table->integer('price');
            $table->string('status');
            $table->integer('discount');
            $table->string('quantity');
            $table->longText('description');
            $table->timestamps();
            $table->foreign('main_category_id')->references('id')->on('khaas_main_categories')->onDelete('cascade');
            $table->foreign('sub_category_id')->references('id')->on('khaas_sub_categories')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('khaas_tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('khaas_products');
    }
}
