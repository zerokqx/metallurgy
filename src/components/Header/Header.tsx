import { HeaderStyle } from '@/styledComponents/header.stl'
import { MotionConfig } from 'motion/react'
import HeaderCenter from '@/components/Header/HeaderCenter'
import HeaderLeft from '@/components/Header/HeaderLeft'
import { FC } from 'react'
import { TCommonProps } from '@/types/components/header/header.types'

const Header: FC = () => {
    const { gridTemplate, center }: TCommonProps = {
        center: 'center',
        gridTemplate: '1fr',
    }

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle

                    columnGap={'10px'}
                    alignItems={center}
                    justifyItems={center}
                    gridTemplateColumns={gridTemplate}
                    gridTemplateRows={gridTemplate}
                >
                    <HeaderCenter>
                        <HeaderLeft />
                    </HeaderCenter>
                </HeaderStyle>
            </MotionConfig>
        </>
    )
}

export default Header
