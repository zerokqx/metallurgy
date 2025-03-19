import { TDataNav } from '@/types/components/header/header.types'
import { FaClipboardList, FaUserGroup } from 'react-icons/fa6'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaShoppingBasket } from 'react-icons/fa'
import { lightTheme } from '@/styledComponents/css/theme.stl.ts'


export const dataHeader: TDataNav[] = [
    { text: 'Металл', link: '#', icon: <FaShoppingBasket color={lightTheme.icon.primary} /> },
    { text: 'Сотрудники', link: '#', icon: <FaUserGroup color={lightTheme.icon.primary} /> },
    { text: 'Чертежи', link: '#', icon: <FaClipboardList color={lightTheme.icon.primary} /> },
    { text: 'Станки', link: '#', icon: <IoSettingsSharp color={lightTheme.icon.primary} /> },
] as TDataNav[]