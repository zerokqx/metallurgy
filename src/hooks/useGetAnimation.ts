import { useCallback, useEffect, useState, useTransition } from 'react'
import { CSSProperties } from 'styled-components'
import { useAnimate } from 'motion/react'

const useGetAnimation = (nameFile: string, lazy: boolean) => {
    const [animation, setAnimation] = useState<[CSSProperties, CSSProperties]>([{}, {}])
    const [error, setError] = useState<Error | null>(null)
    const [pending, startTransition] = useTransition()
    const [scope, startAnimation] = useAnimate()

    const load = useCallback(async () => {
        try {
            const modules: Record<string, Function> = import.meta.glob('/src/animation/*.anim.ts')
            console.log(modules)
            const filePath = `/src/animation/${nameFile}.anim.ts`

            if (!modules[filePath]) {
                throw new Error(`Файл ${filePath} не найден`)
            }

            const animationImport: {
                default: [CSSProperties, CSSProperties]
            } = await modules[filePath]()
            setAnimation(animationImport.default)
        } catch (e) {
            setError(e as Error)
        }
    }, [nameFile, setAnimation, setError])
    const lazyReturn = [animation, scope, startAnimation, error, load] as const
    const notLazyReturn = [animation, scope, startAnimation, pending, error] as const
    if (lazy) {
        return lazyReturn
    } else {
        useEffect(() => {
            startTransition(load)
            return () => setAnimation([{}, {}])
        }, [load])
    }

    return notLazyReturn
}

export default useGetAnimation
