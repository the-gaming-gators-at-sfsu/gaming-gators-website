'use client'

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

interface PerspectiveCardProps {
    children: ReactNode
    maxAngleX?: number
    maxAngleY?: number
}

export function PerspectiveCard({ children, maxAngleX, maxAngleY }: PerspectiveCardProps) {

    const [perspective, setPerspective] = useState('')
    const [hovering, setHovering] = useState(false)

    const cardRef = useRef(null)
    const cardBoundsRef = useRef(null)

    function updatePerspective(event: MouseEvent) {
        if (!cardBoundsRef.current) return

        const cardBounds = cardBoundsRef.current

        const mouseX = (event.clientX + window.scrollX) - (cardBounds.x + cardBounds.width / 2)
        const mouseY = (event.clientY + window.scrollY) - (cardBounds.y + cardBounds.height / 2)

        const mousePX = mouseX / cardBounds.width
        const mousePY = mouseY / cardBounds.height

        const rX = -mousePX * (maxAngleX ?? 0)
        const rY = -mousePY * (maxAngleY ?? 0)

        console.log(`rotateY(${rX}deg) rotateX(${rY}deg)`)

        setHovering(true)
        setPerspective(`rotateY(${rX}deg) rotateX(${rY}deg)`)
    }

    useEffect(() => {
        cardBoundsRef.current = cardRef.current.getBoundingClientRect()
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