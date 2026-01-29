'use client'

import { useState } from 'react'

import { FaQuoteLeft, FaDiscord } from 'react-icons/fa6'

import Image from 'next/image'
import Link from 'next/link'

interface PortraitCardProps {
    name: string
    title: string
    description: string
    quote?: string
    image?: string

    // optional socials
    discord?: string
}

export function PortraitCard({ name, title, description, quote, image, discord }: PortraitCardProps) {
    const [showQuote, setShowQuote] = useState(false)

    return (
        <div
            className="relative w-72 h-92 bg-neutral-900 rounded-xl border border-white/20 hover:border-white/50 transition-colors overflow-hidden"
            onMouseEnter={() => {setShowQuote(true)}}
            onMouseLeave={() => {setShowQuote(false)}}
        >
            <div className={`z-10 absolute w-full h-full flex items-center justify-center transition-opacity duration-500 px-2 ${showQuote ? 'opacity-100' : 'opacity-0' }`}>
                <FaQuoteLeft className="absolute top-4 left-4 animate-pulse" size={48} />
                <p className="text-lg italic text-center">{`"${quote || 'The only easy day, was yesterday.'}"`}</p>
                <div className="absolute flex flex-row bottom-4 right-4 text-3xl">
                    {discord && <Link href={discord}>
                        <FaDiscord />
                    </Link>}
                </div>
            </div>

            <div className={`w-full h-full transition-all duration-300 ${showQuote ? 'blur-xs bg-black/20' : ''}`}>
                <div className="absolute w-full h-[50%] bottom-0 bg-linear-to-b from-transparent to-black/85" />
                <Image className="w-full h-full object-cover" src={image || '/bits/empty_silhoutte.png'} alt="" width={320} height={320} />

                <div className="absolute bottom-0 flex flex-col p-4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className=" text-base">{title}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}