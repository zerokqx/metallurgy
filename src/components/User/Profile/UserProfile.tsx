import { ContainerFlex } from '@/styledComponents/Containers.stl'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'

const UserProfile = () => {
    const theme = useTheme() as TTheme
    return (
        <main>
            <ContainerFlex
                background={theme.background.accent}
                height={'100%'}
                width={'50%'}
                style={{
                    borderRadius: '20px',
                }}
            ></ContainerFlex>
        </main>
    )
}

export default UserProfile
