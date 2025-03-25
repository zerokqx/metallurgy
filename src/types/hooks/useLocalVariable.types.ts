import { FVoid } from '@/types/hooks/useMotionAnimation.types'

export type FUseLocalVariable = <TVariable extends string>(
    variableName: Readonly<string>
) => [TVariable, FSetVariable<TVariable>, FVoid]

export type FSetVariable<TValue> = (value: TValue) => ReturnType<FVoid>
