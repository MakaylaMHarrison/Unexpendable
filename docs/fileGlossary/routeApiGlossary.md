
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
MENTAL MODEL:
CODE:
1. export async function POST(req: NextRequest)
2. await req.json()\
DESCRIPTION:
=========================================================
 
