import { FC, PropsWithChildren } from 'react'
import TInitialStateUser from '@/types/redux/userSlice.types'
import { Avatar } from '@/components/ui/avatar'

export type TAvatarWrapper = FC<
    { nameFallback: string; w: string } & Pick<
        TInitialStateUser,
        'profilePictureUrl'
    > &
        Partial<PropsWithChildren<typeof Avatar>>
>
