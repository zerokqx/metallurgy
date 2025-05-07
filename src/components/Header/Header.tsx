import { HeaderStyle } from '@/styledComponents/header.stl'
import { MotionConfig } from 'motion/react'
import { selectBlurState, setBlur } from '@/redux/slices/blurSlice.ts'
import HeaderCenter from '@/components/Header/HeaderCenter'
import HeaderLeft from '@/components/Header/HeaderLeft'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { FC } from 'react'
import { TCommonProps } from '@/types/components/header/header.types'
import { LangSelector } from '@/components/LanguageSelector/LangSelector'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const swapState = () => dispatch(setBlur(!blurState))
    const blurState = useAppSelector(selectBlurState)
    const { gridTemplate, center }: TCommonProps = {
        center: 'center',
        gridTemplate: '1fr',
    }

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    onHoverStart={swapState}
                    onHoverEnd={swapState}
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
