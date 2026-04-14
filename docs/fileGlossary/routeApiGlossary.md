
 # ENTRY: NEXTREQUEST & NEXTRESPONCE
 FILE: ROUTE.TS
============================================
 MENTAL MODEL: THIS ARE IMPORTS HELPER TYPES/UTILIITIES FROM NEXT.JS
 CODE: IMPORT { NEXTREQUEST, NEXTRESPONCE } FROM "./NEXT/SERVER";
 DESCRIPTION: NEXTREQUEST REPRESENTS THE INCOMING HTTP REQUEST LIKE A WRAPPER AROUND REQUEST
 -NEXTRESPONCE HELPER TO SEND RESPONCES BACK (JSON, STATUS CODES, ETC.)
====================================================

# ENTRY: ASYNC
FILE: ROUTE.TS
========================================================
MENTAL MODEL: Is a function that will always return a promise.
CODE:
1. export async function POST(req: NextRequest)
2. await req.json()\
DESCRIPTION: 1. JavaScript runs single thread. That it runs one thing
a time. Normally a function returns a value immediately async will always return a 
promise instead of a direct value.
    2. Await: This is used inside async function to pause execution until a Promise is resolved or rejected.
=========================================================


ENTRY: TIMESTAMP: NEWDATE
FILE: ROUTE.TS
=========================================================================
MENTAL MODEL: CREATES A TIMESTAMP STRING REPRESENTING THE EXACT CURRENT TIME IN A STANARDARDIZED FORMAT
CODE: timestamp: new Date().toISOString()
DESCRIPTION: 1. new Date() creates a Date object for right now.
            2. .toISOString() coverts the date into a standard global format
            Ex: 2026-04-13T18:32:10.123Z Z= UTC (GLOBAL TIME)
==========================================================================
 
