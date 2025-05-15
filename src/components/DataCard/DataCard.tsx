import {
    DataCardRabota,
    DataCardStyled,
    DataCardText,
    DataCardTitle, LightText, Price,
    UserPersonality,
} from '@/styledComponents/DataCardStyled.ts'
import { Avatar } from '@/components/ui/avatar'
import AvatarFallbackStl from '@/styledComponents/AvatarFallback.stl'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'
import gen from "@/assets/Screenshot_2025-05-14-15-25-00_3840x1080.png"
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useTheme } from 'styled-components'

export const DataCard = ({image})=>{
    const theme = useTheme() as TTheme
    return (
        <DataCardStyled>
<UserPersonality>
    <AvatarWrapper profilePictureUrl={gen} nameFallback={"Жп"} w={"80px"}/>
    <div style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
    }}>
    <h1>Баранов Евгений Павлович</h1>
    <LightText>Уборщик</LightText>

    </div>

</UserPersonality>
            <Price>Зарплата: 800Rub</Price>
            <h3 style={{
                width: 'max-content',
                color: theme.text.primary,
                opacity:1,
            }}>Описание:</h3>
            <LightText >
                Супер премиальный уборщик, каждый туалет будет чист при виде Евгения
            </LightText>
        </DataCardStyled>

    )
}