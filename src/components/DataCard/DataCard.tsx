import { DataCardRabota, DataCardStyled, DataCardText, DataCardTitle } from '@/styledComponents/DataCardStyled.ts'

export const DataCard = ({image})=>{
    return (
        <DataCardStyled>
            <img
                src={image}
                alt="Preview"
                style={{
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover', // Сохраняет пропорции, но вписывает изображение в контейнер
                    objectPosition: 'center', // Центрирует изображение
                }}
            />
<div style={{
    gap:20,
    display: 'flex',
    width: '50%', /* Ограничиваем ширину */
    flexGrow: 1, /* Позволяем растягиваться, но без выхода за границы */
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    padding: '10px',
}}>
    <DataCardTitle>Баранов Евгений Павлович</DataCardTitle>
    <DataCardRabota>Премиум уборщик</DataCardRabota>
    <DataCardText>Лучший убрщик в мире. У вас есть грязный толчок, не беда, достаточно Евгению зайти в туалет и он будет чистый.</DataCardText>
</div>
        </DataCardStyled>
    )
}