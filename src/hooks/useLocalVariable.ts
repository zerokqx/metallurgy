import { useState } from 'react'
import { FSetVariable, FUseLocalVariable } from '@/types/hooks/useLocalVariable.types'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'

/**
 * @description Hook for using local storage variables
 * @param variableName
 */
const useLocalVariable: FUseLocalVariable = (variableName) => {
    const [variable] = useState(localStorage.getItem(variableName) || '')

    const setVariable: FSetVariable = (value) => {
        localStorage.setItem(variableName, value)
    }

    const deleteVariable: FVoid = () => {
        localStorage.removeItem(variableName)
    }

    return [variable, setVariable, deleteVariable]
}
export default useLocalVariable
