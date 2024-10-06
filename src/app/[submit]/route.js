import { NextResponse } from "next/server";

//Handling POST request
export async function POST(req, res) {

    //Response 
    return new NextResponse(`<h1>Welcome</h1>`,
        {
            status: 200,
            headers: { 'content-type': 'text/html' }
        }
    );
}