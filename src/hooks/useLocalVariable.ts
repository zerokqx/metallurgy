import { useEffect, useState } from 'react'

/**
 * @description Hook for using local storage variables
 * @param variableName
 */

const useLocalVariable = (variableName: string) => {
    const [variable, setVariableState] = useState(() => {
        return localStorage.getItem(variableName) || ''
    })

    const setVariable = <T extends string>(value: T) => {
        localStorage.setItem(variableName, value)
        setVariableState(value) // Обновляем состояние
    }

    const deleteVariable = () => {
        localStorage.removeItem(variableName)
        setVariableState('') // Удаляем значение из состояния
    }

    // Слушаем изменения в localStorage при монтировании
    useEffect(() => {
        const storedValue = localStorage.getItem(variableName)
        if (storedValue !== variable) {
            setVariableState(storedValue || '')
        }
    }, [variableName])

    return [variable, setVariable, deleteVariable] as const
}

export default useLocalVariable
