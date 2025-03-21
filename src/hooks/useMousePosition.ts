import { useEffect, useState } from 'react'
import FUseMousePosition, {
    TPosState,
} from '@/types/hooks/useMousePosition.types'

const useMousePosition: FUseMousePosition = (targetListener) => {
    const [pos, setPos] = useState<TPosState>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPos({
                x: event.clientX,
                y: event.clientY,
            })
        }

        if (!targetListener) {
            document.addEventListener('mousemove', handleMouseMove)
            return () => {
                document.removeEventListener('mousemove', handleMouseMove)
            }
        } else if (typeof targetListener === 'string') {
            const element = document.querySelector(targetListener)
            if (element) {
                // @ts-ignore
                element.addEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

    return pos
}
export default useMousePosition
