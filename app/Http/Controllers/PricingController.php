<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use Illuminate\Http\Request;


class PricingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pricingAll = Pricing::all();
        return response()->json(['status' => 200, 'pricingAll'=>$pricingAll]);
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
        //data store by this method
        $store = Pricing::create([
            'cardTitle' => $request->cardTitle,
            'cardCourseOne' => $request->cardCourseOne,
            'cardCourseTwo' => $request->cardCourseTwo,
            'cardCourseThree' => $request->cardCourseThree,
            'cardCourseFour' => $request->cardCourseFour,
            'cardCourseFive' => $request->cardCourseFive,
            'cardFee' => $request->cardFee,
        ]);
        return response()->json(['status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function show(Pricing $pricing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = Pricing::find($id);
        return response()->json(['status'=>200,'edit'=>$edit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $p_update = Pricing::find($id);
        $p_update->update([
            'cardTitle' => $request->cardTitle,
            'cardCourseOne' => $request->cardCourseOne,
            'cardCourseTwo' => $request->cardCourseTwo,
            'cardCourseThree' => $request->cardCourseThree,
            'cardCourseFour' => $request->cardCourseFour,
            'cardCourseFive' => $request->cardCourseFive,
            'cardFee' => $request->cardFee,
        ]);
        return response()->json(['status' => 200, 'p_update' => $p_update]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pricing  $pricing
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pricing $pricing,$id)
    {
        $delete = Pricing::find($id);
        $delete->delete();
        return response()->json(['status'=>200,'delete'=>$delete]);
    }
}
