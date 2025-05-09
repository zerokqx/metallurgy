import ButtonShadcnWrapper from '@/styledComponents/ButtonShadcnWrapper'
import { CSSProperties } from 'styled-components'

export const ButtonCard =()=>{
    const style:CSSProperties = {
        fontWeight:'bold',
        width:'100%',
        borderRadius:'20px'
    }
    return <div style={{
        gridRow:2,
        gridColumn:2,
        display:'flex',
        gap:"10px",
        justifyContent:'center',
        flexDirection:'column',
    }}>
        <ButtonShadcnWrapper style={style}>Buy</ButtonShadcnWrapper>
        <ButtonShadcnWrapper style={style}>Add</ButtonShadcnWrapper>
    </div>
}