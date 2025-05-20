import genadiy from '@/assets/Screenshot_2025-05-14-15-25-00_3840x1080.png'
import nikita from '@/assets/img_2.png'
import { DataCard } from '@/components/DataCard/DataCard'

export const Sotrudniki = () => {
    return (
        <main
            style={{
                paddingRight:"6.5%",
                paddingLeft:"6.5%",
                justifyContent: 'start',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems:"stretch",
                rowGap: '10px',
                columnGap: '10px',
                display: 'flex',
                maxHeight: '100%',
                minHeight: 'max-content',
            }}
        >


            <DataCard
                price={"Free"}
                description={`Ответит на любой звонок даже от твоей мамочки`}
                role={'Главный Автоответчик'}
                name={'Шевченко Никита Евгеньевич'}
                image={nikita}
            />


            <DataCard
                price={800}
                description={`Супер премиальный уборщик, каждый туалет будет чист при виде
                Евгения`}
                role={'Уборщик'}
                name={'Баранов Евгений Павлович'}
                image={genadiy}
            />
        </main>
    )
}
