import { NextRequest, NextResponse } from "next/server";
import { runEngine, type EngineInput } from "@/lib/engine";

/*
===========================================================
POST /api/run-engine
===========================================================
- Receives input from frontend (Context screen)
- Calls runEngine (system boundary)
- Returns full system map result
===========================================================
*/

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        /*
        ===========================================================
        Shape + Validate Input
        ===========================================================
        */
        const input: EngineInput = {
            companyPhaseSignal: body.companyPhaseSignal,
            roleSignal: body.roleSignal
        };

        // Basic guard (prevents silent crashes)
        if (!input.companyPhaseSignal || !input.roleSignal) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Missing required input"
                },
                { status: 400 }
            );
        }

        /*
        ===========================================================
        Execute Engine (ONLY through runEngine)
        ===========================================================
        */
        const result = runEngine(input);

        /*
        ===========================================================
        Return Response
        ===========================================================
        */
        return NextResponse.json({
            success: true,
            data: result,
            meta: {
                version: "v1",
                timestamp: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error("API Error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Engine execution failed"
            },
            { status: 500 }
        );
    }
}