'use client'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'

import { useTheme } from 'styled-components'
import BlurableBlock from '@/styledComponents/LightCircle.stl.ts'
import { useEffect, useMemo } from 'react' // Импортируем useMemo
import { TUseMotionAnimationDynamicParam } from '@/types/hooks/useMotionAnimationDynamic.types'
import useMotionAnimationDynamic from '@/hooks/useMotionAnimationDynamic'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useMouse } from '@uidotdev/usehooks'

/**
 * Компонент Welcome, который отображает приветственное сообщение с анимированным фоном и текстом.
 *
 * @component
 * @example
 * return (
 * <Welcome />
 * )
 */
const Welcome = () => {
    const theme = useTheme() as TTheme
    // Указываем тип для ref, чтобы TypeScript понимал, что это div
    const [pos, ref] = useMouse<HTMLDivElement>()

    // Мемоизируем объект styles, чтобы он не создавался заново на каждом рендере,
    // если только не изменились pos.elementX или pos.elementY
    const styles: TUseMotionAnimationDynamicParam = useMemo(
        () => ({
            animationStyles: {
                transform: `translate(${pos.elementX}px, ${pos.elementY}px)`,
            },
            controls: { duration: 0 },
        }),
        [pos.elementX, pos.elementY]
    ) // Зависимости useMemo

    // useMotionAnimationDynamic, вероятно, принимает стабильные options или handle их
    const [scope, animate] = useMotionAnimationDynamic(styles)

    useEffect(() => {
        // Этот эффект будет запускаться при изменении pos или animate
        // Поскольку pos меняется при движении мыши, эффект будет запускаться часто
        animate()
    }, [animate, pos]) // Зависимости useEffect

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
                ref={ref} // ref из useMouse привязывается к ContainerFlex
                style={{ overflow: 'clip', position: 'relative' }}
            >
                <BlurableBlock
                    blur={150}
                    ref={scope} // ref из useMotionAnimationDynamic привязывается к BlurableBlock
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
