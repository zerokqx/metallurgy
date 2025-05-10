import { Card } from '@/components/Card/Card'
import data from './testDataCard'

export const StankiPage = () => {


    return data.map(({price,img}) => <Card text={price} image={img}/>)
}