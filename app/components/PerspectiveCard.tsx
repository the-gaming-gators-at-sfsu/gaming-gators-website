'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'

interface PerspectiveCardProps {

}

export function PerspectiveCard({ children }) {

    const [perspective, setPerspective] = useState('')
    const [hovering, setHovering] = useState(false)

    const cardRef = useRef(null)
    const cardBoundsRef = useRef(null)

    function updatePerspective(event: MouseEvent) {
        const cardBounds = cardBoundsRef.current

        const mouseX = (event.clientX + window.scrollX) - (cardBounds.x + cardBounds.width / 2)
        const mouseY = (event.clientY + window.scrollY) - (cardBounds.y + cardBounds.height / 2)

        const mousePX = mouseX / cardBounds.width
        const mousePY = mouseY / cardBounds.height

        const rX = -mousePX * 14
        const rY = -10

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