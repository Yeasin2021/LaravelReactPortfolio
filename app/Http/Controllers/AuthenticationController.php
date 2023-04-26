<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;

class AuthenticationController extends Controller
{
    // public function login(Request $request){

    //     $user = User::where('email',$request->email)->first();
    //     // if(!$user || !Hash::check( $request->password, $user->password))
    //     if(!$user || !Hash::check( $request->password, $user->password))
    //     {
    //         //return ["error" => "The Password is not matched "];
    //         return response(["error" => "The Password is not matched "]);
    //     }
    //     return response()->json(['status' => 200, 'user' => $user]);

    // }




    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $accessToken = $user->createToken('authToken')->accessToken;
            return response()->json(['access_token' => $accessToken], 200);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }



    public function logOut(){
        Auth::logout();

  }





}
