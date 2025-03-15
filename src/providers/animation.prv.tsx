import { createContext, FC, ReactNode, useCallback, useEffect, useState } from 'react'

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
    const [animations, setAnimation] = useState<AnimationContext>()

    const getNameFile = (path: string) => {
        const fileNameWithExt = path.substring(path.lastIndexOf('/') + 1)
        return fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf('.')).split('.')[0]
    }


    const load = useCallback(async () => {
        try {
            const modules: AnimationContext = import.meta.glob('@/animation/*.anim.ts')
            const newKeys: AnimationContext = {}
            for (const key of Object.keys(modules)) {
                const nameFile = getNameFile(key)
                newKeys[nameFile] = modules[key]

            }
            setAnimation(newKeys)
            return newKeys
        } catch (e) {
            throw Error('Ошибка')
        }
    }, [setAnimation])

    useEffect(() => {
        const loadAnimationAll = async () => await load()
        loadAnimationAll()
    }, [load])

    return (

        <AnimationContext.Provider value={animations ? animations : null}>
            {children}
        </AnimationContext.Provider>
    )
}

export { AnimationProvider, AnimationContext }
