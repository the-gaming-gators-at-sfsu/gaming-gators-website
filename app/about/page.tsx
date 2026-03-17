import Image from 'next/image'

export default function AboutUs() {
    return <main className="">
        {/* hero */}
        <div className="relative w-full h-[calc(26vw+72px)] min-h-64 flex items-center justify-center lg:justify-center border-y border-white/40 pt-[72px]">
            <div className="z-10 absolute top-0 left-1/2 w-1/3 h-full bg-linear-to-l from-transparent to-black/75" />
            <div className="z-10 absolute top-0 right-1/2 w-1/3 h-full bg-linear-to-r from-transparent to-black/75" />
            <div className="z-10 absolute bottom-0 w-full h-1/5 bg-linear-to-b from-transparent to-black/75" />

            <video className="-z-10 absolute top-0 w-full h-full object-cover" src="/teams/valorant_backdrop.webm" autoPlay loop muted />
            <Image className="-z-10 absolute top-0 w-full h-full object-cover opacity-5" src="/hex_backdrop.webp" alt="" width={1920} height={1080} />

            <div className="z-30 flex flex-col items-center justify-center gap-2 lg:gap-6 py-8">
                <Image className="w-24 aspect-square drop-shadow-black drop-shadow-2xl object-contain" src="/bits/gaming_gators_logomark.webp" alt="" width={128} height={128} />
                <h1 className="z-30 md:text-4xl lg:text-7xl font-bold">About Us</h1>
                <h2 className="z-30 md:text-xl lg:text-3xl">Discover our vision and journey as an organization.</h2>
                {/* <h1 className="z-20 text-6xl font-semibold">{teamDetails.title}</h1> */}
            </div>
        </div>

        <div className="relative w-full px-[15%] py-16">
        
            <Image className="-z-10 absolute left-0 top-0 w-full h-full object-cover opacity-3" src={"/hex_backdrop.webp"} alt="" width={1920} height={1080} />

            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-5xl font-semibold">Team Roster</h1>
                    <p className="text-neutral-400">Hover cards to view quote and socials.</p>
                </div>

                
            </div>




        </div>
    </main>
}