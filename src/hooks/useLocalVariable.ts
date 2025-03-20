import { useEffect, useState } from 'react'
import { FSetVariable, FUseLocalVariable } from '@/types/hooks/useLocalVariable.types'

/**
 * @description Хук для декларативного управления переменной в localStorage.
 * @param variableName Название переменной в localStorage. Будет использоваться
 * для установки значений, удаления и тд.
 * @hook
 */
const useLocalVariable: FUseLocalVariable = (variableName) => {
    const [variable, setVariableState] = useState(() => {
        return localStorage.getItem(variableName) || ''
    })
    /**
     * @description Устанавливает значение переменной localStorage
     * @param value Значение которое необходимо установить в localStorage
     */
    const setVariable: FSetVariable = (value) => {
        localStorage.setItem(variableName, value)
        setVariableState(value)
    }
    /**
     * @description Удаляет переменную из localStorage
     */
    const deleteVariable = () => {
        localStorage.removeItem(variableName)
        setVariableState('') // Удаляем значение из состояния
    }

    useEffect(() => {
        const storedValue = localStorage.getItem(variableName)
        if (storedValue !== variable) {
            setVariableState(storedValue || '')
        }
    }, [variable, variableName])

    return [variable, setVariable, deleteVariable] as const
}

export default useLocalVariable
