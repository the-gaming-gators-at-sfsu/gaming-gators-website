import Link from 'next/link'

import { MdOutlineMail } from 'react-icons/md'
import { FaDiscord, FaInstagram } from 'react-icons/fa6'

export function Socials() {
    return <>
        <Link
            className="flex flex-row items-center gap-2 font-semibold hover:bg-green-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
            href="mailto:example@example.com"
            target="_blank"
        >
            <MdOutlineMail />
        </Link>
        <Link
            className="flex flex-row items-center gap-2 font-semibold hover:bg-blue-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
            href="https://discord.gg/dpyyQfcphu"
            target="_blank"
        >
            <FaDiscord />
        </Link>
        <Link
            className="flex flex-row items-center gap-2 font-semibold hover:bg-pink-400/30 active:bg-transparent px-2 py-2 rounded-lg transition-colors"
            href="https://discord.gg/dpyyQfcphu"
            target="_blank"
        >
            <FaInstagram />
        </Link>
    </>
}