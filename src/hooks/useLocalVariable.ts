import { useEffect, useState } from 'react'
import { FSetVariable, FUseLocalVariable } from '@/types/hooks/useLocalVariable.types'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'

/**
 * @description Хук для декларативного управления переменной в localStorage.
 * @param variableName Название переменной в localStorage. Будет использоваться
 * для установки значений, удаления и тд.
 * @returns Возвращает массив из 3-х элементов: текущее состояние переменной,
 * функцию для установки значения переменной и функцию для удаления
 * @hook
 */
const useLocalVariable: FUseLocalVariable = <TVariable extends string>(
    variableName: Readonly<string>
) => {
    const [variable, setVariableState] = useState<TVariable>(() => {
        return (localStorage.getItem(variableName) || '') as TVariable
    })
    /**
     * @description Устанавливает значение переменной localStorage
     * @param value Значение которое необходимо установить в localStorage
     */
    const setVariable: FSetVariable<TVariable> = (value) => {
        localStorage.setItem(variableName, value)
        setVariableState(value)
    }
    /**
     * @description Удаляет переменную из localStorage
     */
    const deleteVariable = () => {
        localStorage.removeItem(variableName)
        setVariableState('' as unknown as TVariable)
    }
    
    useEffect((): ReturnType<FVoid> => {
        const storedValue = localStorage.getItem(variableName)
        if (storedValue !== variable) {
            setVariableState(storedValue as TVariable)
        }
    }, [variable, variableName])
    return [variable, setVariable, deleteVariable] as const
}

export default useLocalVariable
