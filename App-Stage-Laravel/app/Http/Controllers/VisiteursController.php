<?php

namespace App\Http\Controllers;

use App\Models\visiteurs;
use Illuminate\Http\Request;

class VisiteursController extends Controller
{

    
    public function index()
    
     {
    
    
    
     $employees = visiteurs::all();
    
    return response()->json($employees);
    
     }
    
    
    
    
    
    
  public function create()
    
    {
    
    
    }
    
    
    
    
    public function store(Request $request)
    
   {
    
    $validateData = $request->validate([
    
    
    
    'email' => 'required|email|unique:visiteurs|max:255',
    
     'message' => 'required',
    
    ]);
    
    
    
    
    
    
    $employees = new visiteurs;
    
    
    
    
   
    
     $employees->email = $validateData['email'];
    
     $employees->message = $validateData['message'];
    
    
    
    
   $employees->save();
    
    
    
    
    return response()->json('message sended!');
    
    }
    
    
    
    
    public function show($id)
    
     {
    
    
   
    
    }
    
    
    
    
     public function edit($id)
    
  {
    
    
    
   }
    
    
    
    
    public function update(Request $request, $id)
    
    {
    
    
    
    
   
    
    
    
    
    
    
    
    }
    
    
    
    
    public function destroy($id)
    
     {
    
    
    
   
    }
    
    }