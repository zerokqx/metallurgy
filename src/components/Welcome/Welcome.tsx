'use client'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'

import { useTheme } from 'styled-components'
import { TTheme } from '@/styledComponents/css/theme.stl.ts'
import BlurableBlock from '@/styledComponents/LightCircle.stl.ts'
import { useEffect } from 'react'
import useMousePosition from '@/hooks/useMousePosition'
import { TUseMotionAnimationDynamicParam } from '@/types/hooks/useMotionAnimationDynamic.types'
import useMotionAnimationDynamic from '@/hooks/useMotionAnimationDynamic'

/**
 * Компонент Welcome, который отображает приветственное сообщение с анимированным фоном и текстом.
 *
 * @component
 * @example
 * return (
 *   <Welcome />
 * )
 */
const Welcome = () => {
    const theme = useTheme() as TTheme
    const pos = useMousePosition()
    const styles: TUseMotionAnimationDynamicParam = {
        animationStyles: {
            transform: `translate(${pos.x - 100}px, ${pos.y - 200}px)`,
        },
        controls: { duration: 0 },
    }
    const [scope, animate] = useMotionAnimationDynamic(styles)
    useEffect(() => {
        animate()
    }, [animate, pos])
    return (
        <>
            <ContainerFlex
                flexDirection={'column'}
                background={theme.background.lowWhite}
                gap={'10px'}
                padding={'20px'}
                justifyContent={'start'}
                alignItems={'start'}
                height={'max-content'}
                width="100%"
                style={{ overflow: 'clip', position: 'relative' }}
            >
                <BlurableBlock
                    blur={150}
                    ref={scope}
                    style={{ opacity: 0.5 }}
                    position={'absolute'}
                    backgroundColor={theme.text.accent}
                    width={'200px'}
                    height={'100px'}
                />
                <ContainerFlex
                    style={{ overflow: 'clip' }}
                    flexDirection="row"
                    width={'fit-content'}
                    justifyContent="center"
                    alignItems="center"
                >
                    <RainbowText />
                </ContainerFlex>
            </ContainerFlex>
        </>
    )
}

export default Welcome
