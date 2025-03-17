import { ComponentPropsWithRef, FC, useEffect } from 'react'
import GlassEffect from '@/styledComponents/BlurPage.stl.ts'
import useMotionAnimation from '@/hooks/useMotionAnimation.ts'
import { glass } from '@/animation'
import { selectBlurState } from '@/redux/slices/blurSlice.ts'
import { useAppSelector } from '@/hooks/useRedux.ts'

type GlassEffectWrapperProps = { blur: boolean, } & ComponentPropsWithRef<typeof GlassEffect>;

const GlassEffectWrapper: FC<GlassEffectWrapperProps> = ({ blur, ...props }) => {
    const [startAnimation, setRef] = useMotionAnimation(glass)
    const [endAnimation] = useMotionAnimation({ animationStyles: glass.twoState, initialStyles: glass.initialStyles })
    const blurRedux = useAppSelector(selectBlurState)

    useEffect(() => {
        if (blur) {
            startAnimation()
        }
    }, [blur, startAnimation])

    return (
        <GlassEffect {...props} ref={setRef} />
    )
}

export default GlassEffectWrapper
