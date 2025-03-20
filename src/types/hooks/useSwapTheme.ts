import { TStatus } from '@/types/redux/themeSlice.types'

export type FSwapTheme = (value: TStatus) => void
export type FUseSwapTheme = () => FSwapTheme
