import { FC } from 'react'

export const ImageCard: FC<{ image: string }> = ({ image }) => {
    return (
        <img
            style={{
                width:"300px",
                height: '200px',
                gridColumn: '1/3',
                gridRow: '1',
                borderRadius: '5px',
            }}
            src={image}
            alt={'Tovar'}
        />
    )
}
