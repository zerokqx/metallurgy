'use client'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'

import { useTheme } from 'styled-components'
import BlurableBlock from '@/styledComponents/LightCircle.stl.ts'
import { useEffect } from 'react'
import { TUseMotionAnimationDynamicParam } from '@/types/hooks/useMotionAnimationDynamic.types'
import useMotionAnimationDynamic from '@/hooks/useMotionAnimationDynamic'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useMouse } from "@uidotdev/usehooks";

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
    const [pos,ref] = useMouse<HTMLDivElement>()
    const styles: TUseMotionAnimationDynamicParam = {
        animationStyles: {
            transform: `translate(${pos.elementX }px, ${pos.elementY }px)`,
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
                background={theme.background.accent}
                gap={'10px'}
                padding={'20px'}
                justifyContent={'start'}
                alignItems={'start'}
                height={'max-content'}
                width="100%"
                ref={ref}
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
