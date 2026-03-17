import Image from 'next/image'
import Link from 'next/link'

import { Socials } from './Socials'

export function Footer() {
    return (
        <footer className="w-full flex justify-center ">

            <div className="w-[80%] p-8 lg:px-36 flex flex-col gap-8 bg-[#dc90f7]/30 border-t border-white/40 rounded-t-4xl">
                
                <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/">
                            <Image src="/bits/gaming_gators_logomark.webp" alt="" width={80} height={80} />
                        </Link>

                        <p className="text-center md:text-left max-w-96">
                            Gaming Gators is the official e-sports organization at San Francisco State University.
                        </p>

                        <div className="pt-6 flex flex-col md:flex-row items-center gap-4 font-bold">
                            <Link href="/teams">Teams</Link>
                            <Link href="/leadership">Leadership</Link>
                            <Link href="/events">Events</Link>
                            <Link href="/about">About Us</Link>
                        </div>
                    </div>

                    <div>right side</div>
                </div>

                <hr className="text-white/50"></hr>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="font-semibold">Gaming Gators © 2024 - 2026</p>
                    <div className="flex items-center gap-x-1 text-xl">
                        <Socials />
                    </div>
                </div>
                
            </div>

            
        </footer>
    )
}