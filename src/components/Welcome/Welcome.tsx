import useGetAnimation from '@/hooks/useGetAnimation.ts'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from '@/components/Welcome/RainbowText.tsx'
import { useEffect } from 'react'

const Welcome = () => {
    const [anim, s, a] = useGetAnimation('pulse')
    console.log(anim)
    useEffect(() => {
    }, [anim])
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
                width="d100%"
                initial={anim?.initialStyles}
            >
                <ContainerFlex
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
