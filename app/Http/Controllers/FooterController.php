<?php

namespace App\Http\Controllers;

use App\Models\Footer;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $footer = Footer::all();
        return response()->json(['status'=>200,'footer'=>$footer]);
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
        // dd($request->all());
        $images = $request->file('image');
        if($images){
            $fileName = time().'.'.$images->extension();
            $images->move(public_path('back-end/img/footer'),$fileName);
        }
        $footer = Footer::create([
            'title' => $request->title,
            'header' => $request->header,
            'copy_right' => $request->copyRight,
            'developer_name' => $request->developerName,
            'icon_one' => $request->iconOne,
            'icon_two' => $request->iconTwo,
            'icon_three' => $request->iconThree,
            'icon_four' => $request->iconFour,
            'icon_five' => $request->iconFive,
            'image' => $fileName
        ]);
        return response()->json(['status'=>200,'footer'=>$footer]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Footer  $footer
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // $getImage = Footer::first();
        // return response()->json(['status'=>200,'getImage'=>$getImage]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Footer  $footer
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = Footer::find($id);
        return response()->json(['status'=>200,'edit'=>$edit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Footer  $footer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        // dd($request->all());
        $footerUpdate = Footer::find($id);
        $images = $request->file('image');

        if($images){
            $fileName = time().'.'.$images->extension();
            $images->move(public_path('back-end/img/footer'),$fileName);

        }

        $footer = $footerUpdate->update([
            'title' => $request->title,
            'header' => $request->header,
            'copy_right' => $request->copyRight,
            'developer_name' => $request->developerName,
            'icon_one' => $request->iconOne,
            'icon_two' => $request->iconTwo,
            'icon_three' => $request->iconThree,
            'icon_four' => $request->iconFour,
            'icon_five' => $request->iconFive,
            'image' => $fileName
        ]);
        return response()->json(['status'=>200,'footer'=>$footer]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Footer  $footer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Footer $footer)
    {
        //
    }
}
