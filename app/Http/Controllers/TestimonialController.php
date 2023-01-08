<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $testimonial  = Testimonial::all();
        return response()->json(['ststus'=>200,'testimonial'=>$testimonial]);
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

        $images = $request->file('image');
        if($images){
            $fileName = $request->name.'_'.time().'_'.$request->job.'.'.$images->extension();
            $images->move(public_path('back-end/img/testimonial'),$fileName);
        }
        $testimonial = Testimonial::create([
            'name' => $request->name,
            'occupation' => $request->job,
            'description' => $request->description,
            'image' => $fileName,
        ]);
        return response()->json(['status'=>200,'testimonial'=>$testimonial]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit  = Testimonial::find($id);
        return response()->json(['ststus'=>200,'edit'=>$edit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $testimonialUpdate  = Testimonial::find($id);
        $images = $request->file('image');
        if($images){
            $fileName = $request->name.'_'.time().'_'.$request->job.'.'.$images->extension();
            $images->move(public_path('back-end/img/testimonial'),$fileName);
        }
        $testimonialUpdate->update([
            'name' => $request->name,
            'occupation' => $request->job,
            'description' => $request->description,
            'image' => $fileName,
        ]);
        return response()->json(['status'=>200,'testimonialUpdate'=>$testimonialUpdate]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimonial $testimonial)
    {
        //
    }
}
