import {
    CardName,
    DataCardStyled,
    LightText,
    Price,
    UserPersonality,
} from '@/styledComponents/DataCardStyled.ts'
import AvatarWrapper from '@/components/Wrappers/AvatarWrapper'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { useTheme } from 'styled-components'
import { FC } from 'react'

export const DataCard: FC<{
    image?: Parameters<typeof AvatarWrapper>[0]['profilePictureUrl']
    name:string,
    role:string,
    price:number,
    description:string,
}> = ({ image,name,role,price,description }) => {
    const theme = useTheme() as TTheme

    const getReserve = (name:string):string=>{
        const getWord = (str:string)=> str.slice(0,1)
        const reserveName = name.split(" ")
        return `${getWord(reserveName[0])}${getWord(reserveName[1])}`
    }
    return (
        <DataCardStyled>
            <UserPersonality>
                <AvatarWrapper
                    profilePictureUrl={image||''}
                    nameFallback={getReserve(name)}
                    w={'80px'}
                />
                <div
                    style={{
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                    }}
                >
                    <CardName>{name}</CardName>
                    <LightText>{role}</LightText>
                </div>
            </UserPersonality>
            <Price>Зарплата: {price}</Price>
            <h3
                style={{
                    width: 'max-content',
                    color: theme.text.primary,
                    opacity: 1,
                }}
            >
                Описание:
            </h3>
            <LightText>
                {description}
            </LightText>
        </DataCardStyled>
    )
}
