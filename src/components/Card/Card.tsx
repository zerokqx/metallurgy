import { CardStyled } from '@/styledComponents/Card.ts'
import { CardPrice } from '@/components/Card/CardPrice'
import { ButtonCard } from '@/components/Card/ButtonCard'


export const Card = ()=>{

    return (
        <CardStyled>
            <CardPrice text={"2000$"}/>
            <ButtonCard/>
        </CardStyled>

    )
}