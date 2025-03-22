import TTheme from '@/types/styledComponents/css/theme/theme.types'
import chroma from 'chroma-js'

const darkTheme: TTheme = {
    text: {
        primary: '#B6BCBD',
        accent: '#409FEF',
        secondary: '',
        disabled: '',
    },
    background: {
        accent: chroma('#131313').hex(),
        primary: '#101010',
    },
    icon: {
        primary: '#33353b',
        accent: '#409FEF',
        disabled: '',
    },
    contrast: {
        accent: '#409FEF',
        highContrast: '',
    },
    border: {
        muted: '',
        accent: chroma('#409FEF').darken(1.2).hex(),
    },
    glass: {
        accent: 'rgba(0,0,0,0.26)',
    },
    shadow: {
        light: '',
        dark: '',
    },
    button: {
        primary: '',
        hover: '',
        disabled: '',
    },
    state: {
        success: '',
        warning: '',
        error: '',
        info: '',
    },
}
export default darkTheme
