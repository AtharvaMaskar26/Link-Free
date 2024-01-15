import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='py-4 bg-white border-b '>
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex gap-6">
                    <Link href={'/'}>LinkFree</Link>
                    <nav className='flex items-center gap-4 text-slate-500 text-sm'>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <nav className="flex gap-4 text-sm text-slate-500">
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/register'}>Create Account</Link>
                </nav>
            </div>

        </header>
    )
}

export default Header