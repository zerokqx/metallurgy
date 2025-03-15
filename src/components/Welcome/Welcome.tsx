import useGetAnimation from '@/hooks/useGetAnimation.ts'
import { useEffect } from 'react'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'

const Welcome = () => {
    const [anim, scope, start] = useGetAnimation('pulse', false)
    useEffect(() => {

        start(scope.current, anim[1])
        if (anim) {
            scope.current?.setAttribute('style', anim[0])
        }
    }, [scope, anim, start])

    return (
        <>
            <ContainerFlex
                background={'#f6f6f6'}
                direction={'column'}
                gap={'10px'}
                padding={'20px'}
                x={'start'}
                y={'start'}
                height={'max-content'}
                width="100%"
                ref={scope}
            >
                <ContainerFlex
                    direction="row"
                    width={'fit-content'}
                    x="center"
                    y="center"
                >
                    <RainbowText />
                </ContainerFlex>
            </ContainerFlex>)
        </>
    )
}

export default Welcome
