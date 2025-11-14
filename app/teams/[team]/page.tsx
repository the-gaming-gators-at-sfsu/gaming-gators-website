import Image from 'next/image'
import Link from 'next/link'

import { IoMdReturnLeft } from 'react-icons/io'

import { teams } from '@/dispositions/teams'
import { IntroFade } from '@/components/IntroFade'

const roster = [
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    },
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    },
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    },
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    },
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    },
    {
        name: "Lance Ruiz",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game."
    }
]

export default async function TeamPage({
    params
}: {
    params: Promise<{ team: string }>
}) {
    const { team } = await params
    const teamDetails = teams[team]

    if (!teamDetails) {
        return <p>team not found</p>
    }

    return (
        <main className="w-full flex flex-col pt-18">
            <IntroFade />

            {/* hero */}
            <div className="relative w-full h-[26vw] min-h-64 flex items-center justify-center lg:justify-center border-b border-white/40">
                {/* <div className="z-10 absolute bottom-0 w-full h-1/2 bg-linear-to-b from-transparent to-black" /> */}
                <div className="z-10 absolute left-1/2 w-1/3 h-full bg-linear-to-l from-transparent to-black/90" />
                <div className="z-10 absolute right-1/2 w-1/3 h-full bg-linear-to-r from-transparent to-black/90" />
                <Image className="-z-10 absolute w-full h-full object-cover object-top" src={teamDetails.backdrop} alt="" width={1920} height={1080} />
                {/* <video className="-z-10 absolute w-full h-full object-cover" src="/teams/valorant_backdrop.webm" autoPlay loop muted /> */}
                <Image className="-z-10 absolute w-full h-full object-cover opacity-5" src="/hex_backdrop.webp" alt="" width={1920} height={1080} />

                <div className="z-30 flex flex-col items-center justify-center gap-6 py-8">
                    <Image className="w-[24vw] min-w-48 drop-shadow-black drop-shadow-2xl object-contain" src={teamDetails.logo} alt="" width={512} height={512} />
                    <Link
                        className="z-30 flex flex-row items-center gap-2 font-semibold hover:bg-white/20 active:bg-transparent border border-white/20 py-2 px-12 rounded-xl transition-all"
                        href="/teams"
                    >
                        <IoMdReturnLeft />
                        See all Teams
                    </Link>
                    {/* <h1 className="z-20 text-6xl font-semibold">{teamDetails.title}</h1> */}
                </div>
            </div>

            <div className="w-full px-[15%] py-16">

                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="text-5xl font-semibold">Roster</h1>
                        <p className="text-neutral-400">View our current starting line-up.</p>
                    </div>

                    <div className="flex flex-wrap justify-left flex-row gap-8 overflow-auto">
                        {roster.map((player, index) =>
                            <div className="relative w-72 h-92 bg-neutral-900 rounded-xl border border-white/20 overflow-hidden" key={index}>
                                <Image className="w-full h-full object-cover" src="/bits/empty_silhoutte.png" alt="" width={320} height={320} />

                                <div className="absolute bottom-0 flex flex-col p-4">
                                    <h3 className="text-2xl font-bold">{player.name}</h3>
                                    <p className="italic">{player.title}</p>
                                    <p>{player.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            
        </main>
    )
}