import React from 'react'
import NextLink from 'next/link';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <NextLink href="/settings">Settings (SSR)</NextLink>
                </li>
            </ul>
        </div>
    )
}
