<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

use Illuminate\Http\UploadedFile;
use App\Exceptions\Handler;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $slider = Slider::all();
        return response()->json(['status'=>200,'slider'=>$slider]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $images = $request->file('slider_image');
        // dd($images);
        if($images){
            $fileName = time().'.'.$images->extension();
            $images->move(public_path('back-end/img/slider'),$fileName);
        }
        $Image = Slider::create([
            'slider_image' => $fileName,
            'slider_title' => $request->slider_title,
            'slider_header' => $request->slider_header,
        ]);
        return response()->json(['status'=>200,'Image'=>$Image]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function show(Slider $slider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = Slider::find($id);
        return response()->json(['status'=>200,'edit'=>$edit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {

        $Image = Slider::find($id);

        $images = $request->file('image');
        // dd($images);
        if($images){
            $fileName = time().'.'.$images->extension();
            $images->move(public_path('back-end/img/slider'),$fileName);
        }


        $Image->update([
            'slider_title' => $request->slider_title,
            'slider_header' => $request->slider_header,
            'slider_image' => $fileName,
        ]);

        return response()->json(['success'=>200,'Image'=>$Image]);



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function destroy(Slider $slider)
    {
        //
    }
}
