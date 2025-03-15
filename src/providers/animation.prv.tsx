import { createContext, FC, ReactNode, useCallback, useEffect, useState, useTransition } from 'react'

interface AnimationProviderProps {
    children: ReactNode;
}

type AnimationContext = Record<string, Function> | null

const AnimationContext = createContext<AnimationContext>(null)


/**
 * @description Провайдер который подтягивает все файлы анимация из папки `@/animation`
 * @param  children JSX элементы
 * @provider
 * @see useGetAnimation
 */
const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
    const [animations, setAnimation] = useState<AnimationContext>(null)
    const [pending, startTransition] = useTransition()

    const getNameFile = (path: string) => {
        const fileNameWithExt = path.substring(path.lastIndexOf('/') + 1)
        return fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf('.')).split('.')[0]
    }

    const loadAnimations = useCallback(() => {
        startTransition(async () => {
            const modules: AnimationContext = import.meta.glob('@/animation/*.anim.ts')
            const newKeys: AnimationContext = {}

            for (const key of Object.keys(modules)) {
                const nameFile = getNameFile(key)
                const moduleLoad = await modules[key]()
                newKeys[nameFile] = moduleLoad.default
            }

            setAnimation(newKeys)
        })
    }, [])

    useEffect(() => {
        loadAnimations()
    }, [loadAnimations])


    return (
        <AnimationContext.Provider value={animations}>
            {!pending && children}
        </AnimationContext.Provider>
    )
}

export { AnimationProvider, AnimationContext }
