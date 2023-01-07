<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('header')->nullable();
            $table->string('name')->nullable();
            $table->integer('age')->nullable();
            $table->string('website')->nullable();
            $table->string('degree')->nullable();
            $table->string('phone')->nullable();
            $table->string('city')->nullable();
            $table->string('email')->nullable();
            $table->string('job')->nullable();
            $table->longText('descriptionOne')->nullable();
            $table->longText('descriptionTwo')->nullable();
            $table->longText('descriptionThree')->nullable();
            $table->longText('descriptionFour')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abouts');
    }
}
