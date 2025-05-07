import { TStatusTheme } from '@/types/redux/themeSlice.types'
import { FVoid } from '@/types/hooks/useMotionAnimation.types'

export type FSwapTheme = (value: TStatusTheme) => void
export type FUseSwapTheme = (auto?: boolean) => [FSwapTheme, FVoid]
