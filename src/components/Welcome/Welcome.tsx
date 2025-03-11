import metal from "@@/metall.jpg"
import AspectRatioStyled from '@/styledComponents/AspectRatio.stl.ts'
import no_image from "@@/no_image.png"

const Welcome = () => {
 return(
     <AspectRatioStyled>
                 <img className={"welcome__img"} src={metal ? metal : no_image} alt="Metall photo" />
    </AspectRatioStyled>)
}

export default Welcome;