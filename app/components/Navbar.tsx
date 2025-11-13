'use client'

import { useState } from 'react'

import { IoHomeOutline, IoPeopleOutline } from 'react-icons/io5'
import { LuTrophy } from 'react-icons/lu'
import { FaAngleDown } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

const teams = [
    {
        href: 'valorant',
        logo: '/teams/valorant_logo.png',
        backdrop: '/teams/valorant_backdrop.webp',
        remark: ''
    },
    {
        href: 'marvel_rivals',
        logo: '/teams/marvel_rivals_logo.webp',
        backdrop: '/teams/marvel_rivals_backdrop.webp',
        remark: ''
    },
    {
        href: 'overwatch_2',
        logo: '/teams/overwatch_2_logo.webp',
        backdrop: '/teams/overwatch_2_backdrop.webp',
        remark: ''
    },
]

export function Navbar() {
    const [showTeams, setShowTeams] = useState(false)

    return (
        <nav className="fixed w-full bg-neutral-900/10 backdrop-blur-xl">

            <div className="w-full h-18 flex flex-row items-center justify-between px-36">
                <div>
                    <Image src={"/bits/gaming_gators_logomark.webp"} alt="" width={52} height={52} />
                </div>

                <div className="flex flex-row gap-12">
                    <Link
                        className="flex font-semibold items-center gap-2"
                        onMouseEnter={() => { setShowTeams(false) }}
                        href={"/"}
                    >
                        <IoHomeOutline />
                        Home
                    </Link>
                    <p className="flex font-semibold items-center gap-2" onMouseEnter={() => { setShowTeams(true) }}>
                        <LuTrophy />
                        Teams
                        <FaAngleDown />
                    </p>
                    <Link
                        className="flex font-semibold items-center gap-2"
                        onMouseEnter={() => { setShowTeams(false) }}
                        href={"/organization"}
                    >
                        <IoPeopleOutline />
                        Organization
                    </Link>
                </div>

                <div>
                    -
                </div>
            </div>

            <div
                className={`relative w-full flex flex-col items-center justify-center gap-8 bg-linear-to-t from-transparent via-neutral-950 to-neutral-950 border-b border-white/20 transition-all duration-300 ${showTeams ? 'opacity-100 p-16 pt-48 lg:pt-16 h-screen lg:h-auto overflow-auto' : 'opacity-0 h-0 p-0 overflow-hidden'}`}
                onMouseLeave={() => { setShowTeams(false) }}
            >
                <Image className="absolute w-full h-full object-cover opacity-3" src={"/hex_backdrop.webp"} alt="" width={1920} height={1080} />
                <Image className="absolute w-[50%] h-full object-cover opacity-2" src={"/bits/gaming_gators_logomark.webp"} alt="" width={1920} height={1080} />

                <div className="flex flex-col items-center text-center">
                    <h1 className="flex flex-row items-center gap-2 text-2xl font-bold">
                        <LuTrophy />
                        Our Active Teams
                    </h1>

                    <p className="text-neutral-400">Explore our current roster competing across these e-sports titles.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-8 lg:gap-12">
                    {teams.map((team, index) =>
                    <Link className="relative max-h-64 aspect-video group" href={`/teams/${team.href}`} onClick={() => {setShowTeams(false)}} key={index}>

                        <Image className="absolute w-full h-full object-cover group-hover:blur-xl opacity-0 group-hover:opacity-50 rounded-xl transition-all duration-300" src={team.backdrop} alt="" width={1920} height={1080} />

                        <div className="relative w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden">

                            <Image className="z-30 h-[50%] drop-shadow-2xl object-contain" src={team.logo} alt={team.href + " game logo"} width={1000} height={1000} />
                            <div className="z-20 absolute w-full h-full bg-linear-to-b from-transparent to-black/85" />
                            <Image className="z-10 absolute w-full h-full object-cover opacity-90 group-hover:blur-xs transition-all rounded-2xl" src={team.backdrop} alt={team.href} width={1920} height={1080} />
                        </div>
                        
                    </Link>
                    )}
                </div>

            </div>


        </nav>
    )
}

