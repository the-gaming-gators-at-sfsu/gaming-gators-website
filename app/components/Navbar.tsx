'use client'

import { useState } from 'react'

import { IoHomeOutline, IoPeopleOutline } from 'react-icons/io5'
import { LuTrophy } from 'react-icons/lu'
import { FaAngleDown, FaAngleUp, FaAngleRight} from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import { teams } from '../dispositions/teams'

import { Socials } from './Socials'

export function Navbar() {
    const [showTeams, setShowTeams] = useState(false)
    const [showOrganizationDropdown, setShowOrganizationDropdown] = useState(false)

    return (
        <nav className="z-50 fixed w-full flex justify-center">

            <div className="w-full md:w-[80%] bg-[#dc90f7]/30 backdrop-blur-xl rounded-b-4xl">

                <div className="w-full h-18 flex flex-row items-center justify-between lg:px-36">
                    <Link href="/">
                        <Image src={"/bits/gaming_gators_logomark.webp"} alt="" width={52} height={52} />
                    </Link>

                    <div>
                        <div className="hidden sm:flex flex-row lg:gap-4">
                            <Link
                                className="flex font-semibold items-center gap-2 hover:bg-white/20 active:bg-transparent px-4 py-2 rounded-lg drop-shadow-black/35 drop-shadow-sm transition-colors"
                                onMouseEnter={() => { setShowTeams(false) }}
                                href={"/"}
                            >
                                <IoHomeOutline />
                                Home
                            </Link>
                            <p
                                className="flex font-semibold items-center gap-2 hover:bg-amber-300/30 active:bg-transparent px-4 py-2 rounded-lg drop-shadow-black/35 drop-shadow-sm cursor-pointer transition-colors"
                                onMouseEnter={() => { setShowTeams(true) }}
                                onClick={() => { setShowTeams(!showTeams) }}
                            >
                                <LuTrophy />
                                Teams
                                {showTeams ? <FaAngleUp /> : <FaAngleDown />}
                            </p>

                            <div className="relative" onMouseLeave={() => { setShowOrganizationDropdown(false) }}>
                                <div
                                    className={`peer group flex font-semibold items-center gap-2 hover:bg-sky-300/30 px-4 active:bg-transparent py-2 rounded-t-lg drop-shadow-black/35 drop-shadow-sm transition-colors ${showOrganizationDropdown && 'bg-sky-300/30'}`}
                                    onMouseEnter={() => { setShowTeams(false); setShowOrganizationDropdown(true) }}
                                >
                                    <IoPeopleOutline />
                                    Organization

                                    {showOrganizationDropdown ? <FaAngleUp /> : <FaAngleDown />}
                                </div>

                                <div
                                    className={
                                        `z-10 absolute w-full p-4 flex flex-col gap-2 font-semibold bg-[#51365b]/95 border-b border-white/50 rounded-b-lg transition-all duration-300
                                        ${showOrganizationDropdown ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
                                    `}
                                    onClick={() => { setShowOrganizationDropdown(false) }}
                                    
                                >
                                    <Link className="flex items-center gap-1 hover:pl-1 hover:animate-pulse transition-all" href={"/about"}>
                                        <FaAngleRight /> About Us
                                    </Link>
                                    <Link className="flex items-center gap-1 hover:pl-1 hover:animate-pulse transition-all" href={"/about"}>
                                        <FaAngleRight /> Leadership
                                    </Link>
                                    <Link className="flex items-center gap-1 hover:pl-1 hover:animate-pulse transition-all" href={"/about"}>
                                        <FaAngleRight /> Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-1 text-xl">
                        {/* <Link href={""}></Link> */}
                        <Socials />
                    </div>
                </div>



                <div
                    className={`relative w-full flex flex-col items-center justify-center gap-8 bg-linear-to-t from-transparent via-neutral-900/75 to-neutral-900/50 border-b border-white/30 rounded-b-4xl lg:transition-all lg:duration-300 overflow-auto lg:overflow-hidden ${showTeams ? 'opacity-100 h-screen lg:h-auto min-h-96 p-8 lg:p-16' : 'opacity-0 min-h-0 h-0 p-0 overflow-hidden'}`}
                    onMouseLeave={() => { setShowTeams(false) }}
                >
                    <div className="flex flex-col items-center text-center">
                        <h1 className="flex flex-row items-center gap-2 text-2xl font-bold">
                            <LuTrophy />
                            Our Active Teams
                        </h1>

                        <p className="text-neutral-400">Explore our current roster competing across these e-sports titles.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 xl:gap-x-8 gap-y-6">
                        {Object.entries(teams).map(([teamName, team]) => {

                            return (
                                <Link
                                    className="relative max-w-full sm:max-w-[45%] 2xl:max-w-[22%] aspect-video group drop-shadow-black/50 hover:drop-shadow-xl"
                                    href={`/teams/${teamName}`}
                                    onClick={() => {setShowTeams(false)}}
                                    key={teamName}
                                >
                                    {/* underglow blur effect */}
                                    <Image className="absolute w-full h-full object-cover group-hover:blur-md group-active:blur-xs opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-200" src={team.backdrop} alt="" width={1920} height={1080} />

                                    {/* main card body */}
                                    <div className="relative w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden">
                                        <Image className="z-30 h-[50%] drop-shadow-2xl object-contain" src={team.logo} alt={teamName + " game logo"} width={1000} height={1000} />
                                        <div className="z-20 absolute w-full h-full bg-linear-to-b from-transparent to-black/85" />
                                        <Image className="z-10 absolute w-full h-full object-cover opacity-90 group-hover:blur-xs border-2 border-white/50 transition-all duration-500 rounded-xl" src={team.backdrop} alt={teamName} width={1920} height={1080} />
                                    </div>

                                </Link>
                            )
                        })}
                    </div>

                    <Link
                        className="flex flex-row items-center gap-2 font-semibold hover:bg-white/20 active:bg-transparent border border-white/20 py-2 px-12 rounded-xl transition-all"
                        href="/teams"
                        onClick={() => {setShowTeams(false)}}
                    >
                        <LuTrophy />
                        View Teams Page
                    </Link>

                    <Image className={`absolute w-[50%] h-full object-cover transition-all duration-1000 pointer-events-none ${showTeams ? 'opacity-2 blur-none translate-y-[10%]' : 'opacity-0 blur-2xl translate-y-full'}`} src={"/bits/gaming_gators_logomark.webp"} alt="" width={1920} height={1080} />
                    <Image className="-z-10 absolute w-full h-full object-cover opacity-3" src={"/hex_backdrop.webp"} alt="" width={1920} height={1080} />
                </div>
            </div>

        </nav>
    )
}

