<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolio  = Portfolio::all();
        return response()->json(['ststus'=>200,'portfolio'=>$portfolio]);
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
            $images->move(public_path('back-end/img/portfolio'),$fileName);
        }
        $portfolio = Portfolio::create([
            'title_one' => $request->title_one,
            'title_two' => $request->title_two,
            'link' => $request->link,
            'image' => $fileName,
        ]);
        return response()->json(['status'=>200,'portfolio'=>$portfolio]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function show(Portfolio $portfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit  = Portfolio::find($id);
        return response()->json(['status'=>200,'edit'=>$edit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $portfolioUpdate  = Portfolio::find($id);
        $images = $request->file('image');
        if($images){
            $fileName = $request->name.'_'.time().'_'.$request->job.'.'.$images->extension();
            $images->move(public_path('back-end/img/portfolio'),$fileName);
        }
        $portfolioUpdate->update([
            'title_one' => $request->title_one,
            'title_two' => $request->title_two,
            'link' => $request->link,
            'image' => $fileName,
        ]);
        return response()->json(['status'=>200,'portfolioUpdate'=>$portfolioUpdate]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Portfolio  $portfolio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Portfolio $portfolio)
    {
        //
    }
}
