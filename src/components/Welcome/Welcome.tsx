import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import RainbowText from './RainbowText'
const Welcome = () => {
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
