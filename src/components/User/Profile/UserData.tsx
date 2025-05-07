import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'
import { ComponentProps, FC } from 'react'
import TInitialStateUser from '@/types/redux/userSlice.types.ts'
import { CustomP } from '@/styledComponents/css/text.stl'
import { useTheme } from 'styled-components'
import TTheme from '@/types/styledComponents/css/theme/theme.types'
import { Separator } from '@/components/ui/separator'
import IconWithText from '@/styledComponents/IconWithText'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const UserData: FC<Pick<TInitialStateUser, 'phone' | 'name' | 'email'>> = ({
    name,
    email,
    phone,
}) => {
    const theme = useTheme() as TTheme
    const CustomPWrapper: FC<
        { text: string } & Partial<ComponentProps<typeof CustomP>>
    > = ({ text, ...props }) => (
        <CustomP {...props} fontFamily={'Rubik'} color={theme.text.primary}>
            {text}
        </CustomP>
    )
    const SeparatorLocal = () => (
        <Separator
            style={{
                width: '100%',
                backgroundColor: theme.border.muted,
            }}
            orientation={'horizontal'}
        />
    )
    return (
        <ContainerFlex
            gap={'5px'}
            flexDirection={'column'}
            alignItems={'start'}
        >
            <CustomPWrapper fontWeight={600} text={name} />
            <SeparatorLocal />
            <IconWithText>
                <MdEmail
                    style={{
                        fill: theme.icon.accent,
                    }}
                />
                <CustomPWrapper fontWeight={300} text={email} />
            </IconWithText>
            <IconWithText>
                <FaPhoneAlt
                    style={{
                        fill: theme.icon.accent,
                    }}
                />
                <CustomPWrapper fontWeight={300} text={phone} />
            </IconWithText>
        </ContainerFlex>
    )
}

export default UserData
