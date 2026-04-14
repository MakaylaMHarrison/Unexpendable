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

export async function GET (){
    return NextResponse.json({ ok: true})
}
export async function POST(req: NextRequest) {
    //Starts error handling block. Anything that fails inside here jumps to catch
    try{
        const body = await req.json();
        // Convert incoming request into useable data
        //Reads the request body
        //Coverts incoming JSON -> JavaScript object
        const input: EngineInput = {
            //Create input object & defines exspected structure
            //Enforces structure using EngineInput
            companyPhaseSignal: body.companyPhaseSignal, //Pulls  companyPhaseSignal from the request body
            roleSignal: body.roleSignal //Pulls roleSignal from request body
        };
/*
==================================================================
Validation Check
===============================================================
-Basic guard (Prevents silent crashes)
-Validates required fields
-If either value is missing -> return 400 error
-If requires fields are missing reject immediately
-!=not
-||=Or operator
- reads as [if companyPhaseSignal is missing or roleSignal is missing -> stop]
-Creates JSON response to send back to client [Reponse Object]
-HTTP Status code 400 = Bad request client sent invaild or incomplete data

*/

        if(!input.companyPhaseSignal || !input.roleSignal) {
            return NextResponse.json( //Early exist immediately sends response
                { // JSON Response Body
                    success: false,
                    error: "Missing required input"
                },
                {status:400}
            ); //ends response

        } //ends validation block

        /*
=========================================================================
Execute Engine
=========================================================================
- This only runs if both companyPhaseSignal and roleSignal exist suceessfully
-Calls a function runEngine
-Passes validated input (went through error check) into runEngine
-Stores whatever runEngine returns as result
        */
       const result = runEngine(input);

/*
============================================================
Return Response
===========================================================
Sends seccuessful JSON response back to client 
-Catch block for error handling
        -JSON parsing
        -engine crashes
        -unexpected bugs
*/
        return NextResponse.json({
            success: true,
            data: result,
            meta: {
                version: "v1",
                timestamp: new Date().toISOString() //Adds currebt time in ISO format
                //Helps debugging/logging
            }

        });

    
    }  catch (error) { //catches any error from above
        console.error("API Error:", error); //Logs error to console
        return NextResponse.json( //Sends fallback erroe response
            {
                success:false,
                error: "Engine execution failed"
             },
             {status:500} //Server error (system failed)

        ); //ends response
        
    } //ends catch
   
} //End the API route function