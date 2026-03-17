'use client'

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

interface PerspectiveCardProps {
    children: ReactNode
    maxAngleX?: number
    maxAngleY?: number
}

export function PerspectiveCard({ children, maxAngleX = 0, maxAngleY = 0 }: PerspectiveCardProps) {

    const [perspective, setPerspective] = useState('')
    const [hovering, setHovering] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)
    const cardBoundsRef = useRef<DOMRect>(null)

    function updatePerspective(event: MouseEvent) {
        if (!cardBoundsRef.current) return

        const cardBounds = cardBoundsRef.current

        const mouseX = (event.clientX + window.scrollX) - (cardBounds.x + cardBounds.width / 2)
        const mouseY = (event.clientY + window.scrollY) - (cardBounds.y + cardBounds.height / 2)

        const mousePX = mouseX / cardBounds.width
        const mousePY = mouseY / cardBounds.height

        const rX = -mousePX * maxAngleX
        const rY = -mousePY * maxAngleY

        console.log(`rotateY(${rX}deg) rotateX(${rY}deg)`)

        setHovering(true)
        setPerspective(`rotateY(${rX}deg) rotateX(${rY}deg)`)
    }

    useEffect(() => {
        if (cardRef.current) {
            cardBoundsRef.current = cardRef.current.getBoundingClientRect()
        }
    }, [cardRef])
    
    return <div
        className={`perspective-distant ${!hovering && 'transition-all duration-500'}`}
        style={{ transform: hovering ? perspective : '' }}
        onMouseMove={updatePerspective}
        onMouseLeave={() => { setHovering(false) }}
        ref={cardRef}
    >
        {children}
    </div>
}