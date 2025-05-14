import genadiy from "@/assets/Screenshot_2025-05-14-15-25-00_3840x1080.png"
import { DataCard } from '@/components/DataCard/DataCard'

export const Sotrudniki = ()=>{

    return (
        <main style={{
            justifyContent: 'start',
            flexDirection: 'row',
        flexWrap: 'wrap',
            rowGap: '10px',
            columnGap: '10px',
            display: 'flex',
            height:"100vh",

        }}>
                <DataCard image={genadiy}/>
            <DataCard image={genadiy}/>

            <DataCard image={genadiy}/>

            <DataCard image={genadiy}/>

        </main>
    )
}