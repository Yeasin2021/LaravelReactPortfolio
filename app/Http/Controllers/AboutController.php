<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $about = About::all();
        return response()->json(['status'=>200,'about'=>$about]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\About  $about
     * @return \Illuminate\Http\Response
     */
    public function show(About $about)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\About  $about
     * @return \Illuminate\Http\Response
     */
    public function edit(About $about)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\About  $about
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        // dd($request->all());
        $about = About::find($id);

        $images = $request->file('image');
        if($images){
            $fileName = time().'.'.$images->extension();
            $images->move(public_path('back-end/img/about'),$fileName);

        }

        $aboutUpdate = $about->update([
            'title' => $request->title,
            'header' => $request->header,
            'name' => $request->name,
            'age' => $request->age,
            'website' => $request->website,
            'degree' => $request->degree,
            'phone' => $request->phone,
            'city' => $request->city,
            'email' => $request->email,
            'job' => $request->job,
            'descriptionOne' => $request->descriptionOne,
            'descriptionTwo' => $request->descriptionTwo,
            'descriptionThree' => $request->descriptionThree,
            'descriptionFour' => $request->descriptionFour,
            'image' => $fileName
        ]);
        return response()->json(['status'=>200,'aboutUpdate'=>$aboutUpdate]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\About  $about
     * @return \Illuminate\Http\Response
     */
    public function destroy(About $about)
    {
        //
    }
}
