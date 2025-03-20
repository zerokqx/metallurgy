import { TStatus } from '@/types/redux/themeSlice.types'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'

export type FSwapTheme = (value: TStatus) => void
export type FUseSwapTheme = (auto?: boolean) => [FSwapTheme, FVoid]
