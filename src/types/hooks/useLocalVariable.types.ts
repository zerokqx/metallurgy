import { FVoid } from '@/types/hooks/useMotionAnimation.types'

export type FUseLocalVariable = (
    variableName: Readonly<string>
) => [string, FSetVariable, FVoid]

export type FSetVariable = (value: string) => void
