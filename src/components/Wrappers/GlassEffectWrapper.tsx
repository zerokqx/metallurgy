import { useEffect } from 'react'
import GlassEffect from '@/styledComponents/BlurPage.stl.ts'
import useMotionAnimation from '@/hooks/useMotionAnimation.ts'
import { glass } from '@/animation'
import { selectBlurState } from '@/redux/slices/blurSlice.ts'
import { useAppSelector } from '@/hooks/useRedux.ts'

const GlassEffectWrapper = () => {
    const [startAnimation, setRef, keyFrames] = useMotionAnimation(glass)
    const blurRedux = useAppSelector(selectBlurState)

    useEffect(() => {
        if (blurRedux) startAnimation()
        else keyFrames()
    }, [blurRedux, startAnimation, keyFrames])

    return (
        <GlassEffect
            position={'absolute'}
            width={'100%'}
            height={'100%'}
            ref={setRef}
        />
    )
}

export default GlassEffectWrapper
