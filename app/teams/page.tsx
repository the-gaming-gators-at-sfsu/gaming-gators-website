import Image from 'next/image'
import Link from 'next/link'

import { teams } from '@/dispositions/teams'
import { FaDiscord } from 'react-icons/fa'

export default function Teams() {
    return (
        <main className="flex flex-col items-center">

            {/* hero */}
            <div className="relative w-full h-[calc(26vw+72px)] min-h-64 flex items-center justify-center lg:justify-center border-y border-white/40 pt-[72px]">
                <div className="z-10 absolute top-0 left-1/2 w-1/3 h-full bg-linear-to-l from-transparent to-black/75" />
                <div className="z-10 absolute top-0 right-1/2 w-1/3 h-full bg-linear-to-r from-transparent to-black/75" />
                <div className="z-10 absolute bottom-0 w-full h-1/5 bg-linear-to-b from-transparent to-black/75" />

                <video className="-z-10 absolute top-0 w-full h-full object-cover" src="/teams/valorant_backdrop.webm" autoPlay loop muted />
                <Image className="-z-10 absolute top-0 w-full h-full object-cover opacity-5" src="/hex_backdrop.webp" alt="" width={1920} height={1080} />

                <div className="z-30 flex flex-col items-center justify-center gap-2 lg:gap-6 py-8">
                    <Image className="w-24 aspect-square drop-shadow-black drop-shadow-2xl object-contain" src="/bits/gaming_gators_logomark.webp" alt="" width={128} height={128} />
                    <h1 className="z-30 md:text-4xl lg:text-7xl font-bold">Our Active Teams</h1>
                    <h2 className="z-30 md:text-xl lg:text-3xl">Explore our current roster competing across these e-sports titles.</h2>
                    {/* <h1 className="z-20 text-6xl font-semibold">{teamDetails.title}</h1> */}
                </div>
            </div>

            <div className="relative w-full px-[15%] py-16">

                <Image className="-z-10 absolute left-0 top-0 w-full h-full object-cover opacity-3" src={"/hex_backdrop.webp"} alt="" width={1920} height={1080} />
    
                <div className="flex flex-col items-center gap-12">

                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h1 className="text-5xl font-semibold">Our Lineup</h1>
                            <p className="text-neutral-400">Select a card to view a team&apos;s active roster.</p>
                        </div>

                        {/* TODO: should ensure visual symmetry with the navbar teams section */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8 xl:gap-12">
                        {Object.entries(teams).map(([teamName, team]) => {
                            return (
                                <Link
                                    className="relative max-h-48 2xl:max-h-64 aspect-video group"
                                    href={`/teams/${teamName}`}
                                    key={teamName}
                                >
                                    {/* underglow blur effect */}
                                    <Image className="absolute w-full h-full object-cover group-hover:blur-md group-active:blur-xs opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-200 group-active:duration-100" src={team.backdrop} alt="" width={1920} height={1080} />

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
                    </div>

                    <div className="text-center space-y-2">
                        <h1 className="text-5xl font-semibold text-purple-300">Joining a Team</h1>
                        <p className="text-neutral-400">Looking to join us? Show your interest on our Discord.</p>
                        <Link
                            className="flex flex-row items-center justify-center gap-2 font-semibold hover:bg-blue-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
                            href="https://discord.gg/dpyyQfcphu"
                            target="_blank"
                        >
                            <FaDiscord size={32} />
                        </Link>
                    </div>
                </div>

            </div>

            
        </main>
    )
}