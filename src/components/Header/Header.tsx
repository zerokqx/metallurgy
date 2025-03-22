import { HeaderStyle } from '@/styledComponents/header.stl'
import { MotionConfig } from 'motion/react'
import { useDispatch } from 'react-redux'
import { setBlur } from '@/redux/slices/blurSlice.ts'
import HeaderCenter from '@/components/Header/HeaderCenter'
import HeaderLeft from '@/components/Header/HeaderLeft'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <>
            <MotionConfig transition={{ duration: 1 }}>
                <HeaderStyle
                    onHoverStart={() => {
                        dispatch(setBlur(true))
                    }}
                    onHoverEnd={() => {
                        dispatch(setBlur(false))
                    }}
                    columnGap={'10px'}
                    alignItems={'center'}
                    justifyItems={'center'}
                    gridTemplateColumns={'1fr'}
                    gridTemplateRows={'1fr'}
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
