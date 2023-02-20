<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class AuthenticationController extends Controller
{
    public function login(Request $request){


        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {

           $messages = $validator->messages();

                foreach ($messages->all() as $message)
                {
                    // toastr()->error ( $message);
                    return "Error Baler Code";
                }

             return redirect()->back()->withInput();
       }


        $loginData=$request->only('email','password');
        if(Auth::attempt($loginData)){
            $request->session()->regenerate();
            // toastr()->success("Welcome To Admin Panel.");
            // return redirect()->route('admin.dashboard');
        }else{
          toastr()->error("These credentials do not match our records.");
          return redirect()->back();
      }

    }



    public function logout(){
        Auth::logout();
        toastr()->success("Successfully Logout.");
        // return redirect()->route('login-form');

  }





}
