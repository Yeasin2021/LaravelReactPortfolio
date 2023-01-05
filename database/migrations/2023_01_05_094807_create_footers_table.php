<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFootersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footers', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->longText('header')->nullable();
            $table->string('copy_right')->nullable();
            $table->string('developer_name')->nullable();
            $table->string('icon_one')->nullable();
            $table->string('icon_two')->nullable();
            $table->string('icon_three')->nullable();
            $table->string('icon_four')->nullable();
            $table->string('icon_five')->nullable();
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
        Schema::dropIfExists('footers');
    }
}
