'use client'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'
import useGetAnimation from '@/hooks/useGetAnimation.ts'
import { gradient } from '@/animation'
import { useTheme } from 'styled-components'
import { Theme } from '@/styledComponents/css/theme.stl.ts'
import LightCircleStyled from '@/styledComponents/LightCircle.stl.ts'
import { useEffect, useState } from 'react'
import { useAnimate } from 'motion/react'

const Welcome = () => {
    const [sc] = useGetAnimation(gradient, true)
    const theme = useTheme() as Theme
    const [scope, animate] = useAnimate()
    const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    console.log(pos)
    useEffect(() => {
        animate(scope.current, { transform: `translate(${pos.x - 100}px, ${pos.y - 200}px)` }, { duration: 0 })
    }, [pos])
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPos({
                x: event.clientX,
                y: event.clientY,
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return (
        <>


            <ContainerFlex
                background={theme.background.lowWhite}
                direction={'column'}
                gap={'10px'}
                padding={'20px'}
                x={'start'}
                y={'start'}
                height={'max-content'}
                width="100%"
                ref={sc}
                initial={gradient.initialStyles}
                style={{ overflow: 'clip', position: 'relative' }}
            >
                <LightCircleStyled
                    blur={150}
                    ref={scope}
                    style={{ opacity: 0.5 }}
                    position={'absolute'}
                    backgroundColor={theme.text.primary}
                    width={'200px'}
                    height={'100px'}
                />
                <ContainerFlex
                    style={{ overflow: 'clip' }}
                    direction="row"
                    width={'fit-content'}
                    x="center"
                    y="center"
                >
                    <RainbowText />
                </ContainerFlex>
            </ContainerFlex>
        </>
    )
}

export default Welcome
