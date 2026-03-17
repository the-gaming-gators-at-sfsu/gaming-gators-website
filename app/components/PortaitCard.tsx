'use client'

import { useState } from 'react'

import { FaQuoteLeft, FaDiscord, FaInstagram } from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineMail } from 'react-icons/md'

interface PortraitCardProps {
    name: string
    title: string
    description: string
    quote?: string
    photo?: string

    // optional socials
    discord?: string
}

export function PortraitCard({ name, title, description, quote, photo, discord }: PortraitCardProps) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div
            className="relative w-72 h-96 bg-neutral-900 rounded-xl border border-white/20 hover:border-white/50 transition-colors overflow-hidden"
            onMouseEnter={() => {setShowDetails(true)}}
            onMouseLeave={() => {setShowDetails(false)}}
        >

            <div className="group w-full h-full">
                {/* logo backdrop */}
                <Image className={`absolute w-full h-full object-contain transition-all duration-500 delay-200 pointer-events-none ${showDetails ? 'opacity-15 blur-none translate-y-0' : 'opacity-0 blur-xl translate-y-1/2'}`} src={"/bits/gaming_gators_logomark.webp"} alt="" width={1920} height={1080} />

                {/* main backdrop */}
                <div className="absolute bottom-0 w-full h-full bg-linear-to-b from-transparent to-[#323232] group-hover:to-[#8c4ea1] transition-colors duration-700" />

                {/* backdrop color splash */}
                <div className="absolute bottom-0 w-full h-[50%] bg-linear-to-t from-transparent via-[#422b4a] to-transparent transition-colors duration-300" />

                {/* lower darkening under-gradient */}
                <div className="z-20 absolute bottom-0 w-full h-[50%] bg-linear-to-b from-transparent via-black/40 to-black" />

                {/* main portrait */}
                <div>

                    <Image
                        className="z-10 absolute w-full h-full px-2 pt-4 object-cover object-top group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 delay-150 ease-in-out drop-shadow drop-shadow-black"
                        src={photo ? (photo + '.png') : '/bits/empty_silhoutte.png'}
                        style={{ opacity: showDetails ? '0%' : '100%' }}
                        alt="" width={320} height={320}
                    />
                    {/* if hover image does not exist then just use base portrait */}
                    {/* TODO: find how to check if file exists (likely just verify an dictionary entry to check) */}
                    {/* currently going to mandate alt photos in the file system (and therefore before builds) */}
                    {
                    <Image
                        className="z-10 absolute w-full h-full px-2 pt-4 object-cover object-top group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 ease-in-out drop-shadow drop-shadow-black"
                        src={photo + '_hover.png'}
                        style={{ opacity: showDetails ? '100%' : '0%' }}
                        alt="" width={320} height={320}
                    />
                    }
                </div>

                {/* hover portrait (if applicable) */}
                {/*  */}


                {/* bottom content */}

                
                <div className={`z-20 absolute bottom-0 flex flex-col h-36 p-4 drop-shadow-black drop-shadow-sm ${showDetails && 'opacity-0'} transition-opacity duration-500`}>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-base">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
                
                <div className={`z-20 absolute bottom-0 flex flex-col h-36 p-4 text-right drop-shadow-black drop-shadow-sm ${!showDetails && 'opacity-0'} transition-opacity duration-500`}>
                    <FaQuoteLeft size={24} />
                    <p className="text-base">{quote}</p>
                    <p className="text-sm">{description}</p>
                    <div className="flex">
                        <Link
                            className="flex flex-row items-center gap-2 font-semibold hover:bg-green-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
                            href="mailto:example@example.com"
                            target="_blank"
                        >
                            <MdOutlineMail />
                        </Link>
                        <Link
                            className="flex flex-row items-center gap-2 font-semibold hover:bg-blue-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
                            href="https://discord.gg/dpyyQfcphu"
                            target="_blank"
                        >
                            <FaDiscord />
                        </Link>
                        <Link
                            className="flex flex-row items-center gap-2 font-semibold hover:bg-pink-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
                            href="https://discord.gg/dpyyQfcphu"
                            target="_blank"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}