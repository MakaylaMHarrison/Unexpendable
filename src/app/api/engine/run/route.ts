/*
==============================================================
                route.ts
==============================================================

What this file does:
    1.Get input 
    2.Run system
    3.Get Output
This is the api layer that talks to frontend:
-Recieves request
-Send reponces back
*/

/*
===============================================================
Import
===========================================================
Import request/response helpers from Next.js server runtime.
-NextRequest represents the incoming HTTP request 
-NextResponce a helper to send responces back
*/

import { NextRequest, NextResponse } from "next/server";

// We care in a different folder src/app/api/engine/run. So we use"@/lib/engine
//Import core engine function and input type from logic layer

import { runEngine, type EngineInput} from "@/lib/engine";

/*
================================================================
Post
============================================================
Post /api/engine/run
-Receives input from frontend
-Calls runEngine 
-Returns structured result as JSON
*/

//Defines an API route handler for Post requests
//This maps to Post /api/engine/run

export async function POST(req: NextRequest) {
    //Starts error handling block. Anything that fails inside here jumps to catch
    try{
        const body = await req.json();
        // Convert incoming request into useable data
        //Reads the request body
    }
}