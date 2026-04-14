
// Import request/response helpers from Next.js server runtime

import { NextRequest, NextResponse } from "next/server";

// Import your core engine function + its input type from your logic layer

import { runEngine, type EngineInput } from "@/lib/engine";

/*
===========================================================
POST /api/run-engine (or /api/engine/run depending on folder)
===========================================================
- Receives input from frontend
- Calls runEngine (your core logic)
- Returns structured result as JSON
===========================================================
*/

// Define a handler for POST requests to this route

export async function POST(req: NextRequest) {
    try {
        // Parse incoming JSON body from the request
        const body = await req.json();

        /*
        ===========================================================
        Shape + Validate Input
        ===========================================================
        */

        // Build a properly typed input object for your engine
        const input: EngineInput = {
            // Pull company phase signal from request body
            companyPhaseSignal: body.companyPhaseSignal,

            // Pull role signal from request body
            roleSignal: body.roleSignal
        };

        // Basic validation guard:
        // If either required field is missing → reject request
        if (!input.companyPhaseSignal || !input.roleSignal) {
            return NextResponse.json(
                {
                    success: false, // indicate failure
                    error: "Missing required input" // human-readable error
                },
                { status: 400 } // HTTP 400 = bad request (client error)
            );
        }

        /*
        ===========================================================
        Execute Engine (core system logic)
        ===========================================================
        */

        // Call your engine with validated input
        const result = runEngine(input);

        /*
        ===========================================================
        Return Response
        ===========================================================
        */

        // Send successful response back to client
        return NextResponse.json({
            success: true, // indicate success

            data: result, // include engine output

            meta: {
                version: "v1", // API version (useful for future changes)

                // Timestamp for debugging / tracking when response was generated
                timestamp: new Date().toISOString()
            }
        });

    } catch (error) {
        // Catch ANY error that happens above (parsing, engine crash, etc.)

        // Log error to server console for debugging
        console.error("API Error:", error);

        // Return generic failure response (don’t expose internal details)
        return NextResponse.json(
            {
                success: false, // indicate failure
                error: "Engine execution failed" // generic message
            },
            { status: 500 } // HTTP 500 = server error
        );
    }
}