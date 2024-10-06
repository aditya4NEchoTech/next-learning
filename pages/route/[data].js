import React from 'react'
import {useRouter} from 'next/router';

export default function getRoute() {
    // Calling useRouter() hook
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            <h1>GeeksforGeeks</h1>
            <h2>pathname:- {router.pathname}</h2>
            <h2>asPath:- {router.asPath}</h2>
        </div>
    )
}