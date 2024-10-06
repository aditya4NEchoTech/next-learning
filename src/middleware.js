import { NextResponse } from "next/server"

export async function middleware(req) {
    //Get the Form Data
    const Formdata = await req.formData();
    let username = Formdata.get('username');
    let password = Formdata.get('password');

    if (username == "gfg" & password == "123") {
        return NextResponse.next()
    } else {
        return new NextResponse(
            `<h1>Invalid Username & Password</h1>`,
            {
                status: 401,
                headers: { 'content-type': 'text/html' }
            }
        );
    }
}

export const config = {
    matcher: '/submit/:path*',
}