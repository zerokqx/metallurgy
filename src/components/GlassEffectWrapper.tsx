import {  useEffect } from 'react'
import GlassEffect from '@/styledComponents/BlurPage.stl.ts'
import useMotionAnimation from '@/hooks/useMotionAnimation.ts'
import { glass } from '@/animation'
import { selectBlurState } from '@/redux/slices/blurSlice.ts'
import { useAppSelector } from '@/hooks/useRedux.ts'



const GlassEffectWrapper = () => {
    const [startAnimation, setRef] = useMotionAnimation(glass)
    const [endAnimation] = useMotionAnimation({ animationStyles: glass.twoState, initialStyles: glass.initialStyles,controls:glass.controls}, setRef)
    const blurRedux = useAppSelector(selectBlurState)



    useEffect(() => {
        console.log(blurRedux)
        if (blurRedux) {
            startAnimation()
        }else{
            console.log('e')
            endAnimation()
        }
    }, [blurRedux, startAnimation,endAnimation])

    return (
        <GlassEffect  zIndex={99} position={'absolute'} width={'100%'}
                     height={'100%'}  ref={setRef} />
    )
}

export default GlassEffectWrapper
