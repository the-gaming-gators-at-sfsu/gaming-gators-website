'use client'

import Image from 'next/image'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function IntroFade(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="z-60 fixed w-full h-screen flex flex-col items-center justify-center gap-4 pointer-events-none backdrop-blur-xl bg-black/80"
            // style={{ backgroundImage: "/bits/gaming_gators_tile.webp", backgroundRepeat: "repeat" }}
        >
            <Image
                src={"/bits/gaming_gators_logo.webp"}
                className="opacity-90 animate-pulse"
                alt=""
                width={100}
                height={100}
            />
            {/* <Image
                src={"/assets/bits/loader.gif"}
                className="opacity-70"
                alt=""
                width={100}
                height={100}
                unoptimized
            /> */}

            <p className="text-white">-</p>
        </motion.div>
    )
}
