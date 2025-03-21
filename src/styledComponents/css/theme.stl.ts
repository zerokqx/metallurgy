export type TTheme = {
    text: {
        primary: string
        accent: string
    }
    background: {
        lowWhite: string
        white: string
    }
    icon: {
        primary: string
        accent: string
    }
    contrast: {
        accent: string
    }
    border: {
        accent: string
        platinum: string
    }
    glass: {
        accent: string
    }
}

const accentColor = '#0075F2'
const primaryColor = '#292F36'

export const lightTheme: TTheme = {
    text: {
        primary: primaryColor,
        accent: accentColor,
    },
    background: {
        lowWhite: '#F6F6F6',
        white: '#FFFFFF',
    },
    icon: {
        primary: primaryColor,
        accent: accentColor,
    },
    contrast: {
        accent: accentColor,
    },

    border: {
        platinum: '#9A9A9A',
        accent: accentColor,
    },
    glass: { accent: 'rgba(255, 255, 255, 0.27)' },
} as const

const accentColorDark = '#3BA6FF'
const primaryColorDark = '#CAC5BE'

export const darkTheme: TTheme = {
    text: {
        primary: primaryColorDark,
        accent: accentColorDark,
    },
    background: {
        lowWhite: '#1D2021',
        white: '#181A1B',
    },
    icon: {
        primary: primaryColorDark,
        accent: accentColorDark,
    },
    contrast: {
        accent: accentColorDark,
    },

    border: {
        platinum: '#E2DFDB',
        accent: '#0058B6',
    },
    glass: { accent: 'rgba(255,255,255,0)' },
}
