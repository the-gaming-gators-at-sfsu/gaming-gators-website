import Image from 'next/image'

import { IntroFade } from './components/IntroFade'
import { PortraitCard } from './components/PortaitCard'

export default function Home() {
  return (
    <main>
      <IntroFade />

      {/* hero */}
      <div className="flex flex-col w-full h-screen">
        
        <div className="w-full h-screen flex items-center justify-center">
          <div className="absolute -z-20 w-full h-full bg-linear-to-b from-transparent via-transparent to-[#dc90f7]/50" />
          <video className="absolute -z-30 w-full h-full object-cover" src="/hero_backdrop.webm" loop autoPlay muted></video>

          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-6xl">sample text</p>
          </div>
          {/* <Image className="absolute w-[30%] aspect-square object-cover opacity-5" src="/bits/gaming_gators_logomark.webp" alt="" width={360} height={360} /> */}
        </div>

        
      </div>

      <div className="w-full px-[15%] py-16">
        
      </div>

      <div className="w-full px-[15%] py-16">
        
      </div>

      <div className="w-full px-[15%] py-16">
        
      </div>

      <div className="w-full px-[15%] py-16">
        
      </div>


    </main>
  )
}
