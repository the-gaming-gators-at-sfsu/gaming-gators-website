import Image from "next/image"

import { IntroFade } from "./components/IntroFade"

export default function Home() {
  return (
    <main>
      <IntroFade />

      {/* hero */}
      <div className="flex w-full h-screen">
        
        <div className="w-full h-full flex items-center justify-center">
          <div className="absolute -z-20 w-full h-full bg-linear-to-b from-transparent via-transparent to-[#dc90f7]/50" />
          <video className="absolute -z-30 w-full h-full object-cover" src="/hero_backdrop.webm" loop autoPlay muted></video>
          {/* <Image className="absolute w-[30%] aspect-square object-cover opacity-5" src="/bits/gaming_gators_logomark.webp" alt="" width={360} height={360} /> */}
        </div>

        <div>
          
        </div>

      </div>

      {/* <iframe
        src="https://player.twitch.tv/?channel=m3rkmus1c&parent=localhost&muted=true"
        height="720"
        width="1280"
        allowfullscreen>
      </iframe> */}
    </main>
  )
}
