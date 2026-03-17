import Image from 'next/image'
import Link from 'next/link'

import { IoMdReturnLeft } from 'react-icons/io'

import { teams } from '@/dispositions/teams'
import { IntroFade } from '@/components/IntroFade'
import { PortraitCard } from '@/components/PortaitCard'
import { PerspectiveCard } from '@/components/PerspectiveCard'

const roster = [
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player1"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player2"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player3"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player4",
        discord: "https://www.discord.gg"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player5"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player6"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player7"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player8"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player9"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player10"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player11"
    },
    {
        name: "Player Name",
        title: "Vanguard",
        description: "A former rival, turned ally. The most versatile and dependable offlaner in the game.",
        photo: "/bits/player12"
    },
]

export default async function TeamPage({
    params
}: {
    params: Promise<{ team: string }>
}) {
    const { team } = await params
    const teamDetails = teams[team]

    if (!teamDetails) {
        return <p>{team} not found</p>
    }

    return (
        <main className="w-full flex flex-col">
            <IntroFade />

            {/* hero */}
            <div className="relative w-full h-[calc(26vw+72px)] min-h-64 flex items-center justify-center lg:justify-center border-b border-white/40 pt-[72px]">
                <div className="z-10 absolute top-0 left-1/2 w-1/3 h-full bg-linear-to-l from-transparent to-black/90" />
                <div className="z-10 absolute top-0 right-1/2 w-1/3 h-full bg-linear-to-r from-transparent to-black/90" />
                <div className="z-10 absolute bottom-0 w-full h-1/5 bg-linear-to-b from-transparent to-black/75" />

                <Image className="-z-10 absolute top-0 w-full h-full object-cover object-top" src={teamDetails.backdrop} alt="" width={1920} height={1080} />
                {/* <video className="-z-10 absolute w-full h-full object-cover" src="/teams/valorant_backdrop.webm" autoPlay loop muted /> */}
                <Image className="-z-10 absolute top-0 w-full h-full object-cover opacity-5" src="/hex_backdrop.webp" alt="" width={1920} height={1080} />

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

            <div className="relative w-full px-[15%] py-16 flex flex-col gap-8">

                <Image className="-z-10 absolute left-0 top-0 w-full h-full object-cover opacity-3" src={"/hex_backdrop.webp"} alt="" width={1920} height={1080} />

                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="text-5xl font-semibold">Team Roster</h1>
                        <p className="text-neutral-400">Hover cards to view quote and socials.</p>
                    </div>

                    <div className="flex flex-wrap justify-left flex-row gap-8 overflow-auto">
                        {roster.map((player, index) =>
                        // <PerspectiveCard key={index}>
                            <PortraitCard name={player.name} title={player.title} description={player.description} photo={player.photo || ""} discord={player.discord || ""} key={index} />
                        // </PerspectiveCard>
                        )}
                    </div>
                </div>


                

                

            </div>


            
        </main>
    )
}