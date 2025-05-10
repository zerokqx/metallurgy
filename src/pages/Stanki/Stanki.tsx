import { Card } from '@/components/Card/Card'
import data from './testDataCard'

export const StankiPage = () => {
    return (
        <main
            style={{
                flexWrap: 'wrap',
                gap: '20px',
                height: 'max-content',
            }}
        >
            {data.map(({ price, img }) => (
                <Card text={price} image={img} />
            ))}
        </main>
    )
}
