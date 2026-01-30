import { useEffect, useState } from 'react'

export default function Spotlight() {
    const [position, setPosition] = useState({ x: '50%', y: '50%' })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` })
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        // Tilt effect
        const cards = document.querySelectorAll('[data-tilt="true"]')

        cards.forEach(card => {
            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                const xPct = x / rect.width
                const yPct = y / rect.height

                const xRot = (0.5 - yPct) * 10
                const yRot = (xPct - 0.5) * 10

                card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`
            }

            const handleMouseLeave = () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
            }

            card.addEventListener('mousemove', handleMouseMove)
            card.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                card.removeEventListener('mousemove', handleMouseMove)
                card.removeEventListener('mouseleave', handleMouseLeave)
            }
        })
    }, [])

    return (
        <div
            className="spotlight"
            style={{
                '--x': position.x,
                '--y': position.y
            }}
        />
    )
}
