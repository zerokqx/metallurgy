export interface Theme {
    text: {
        primary: string; // Новый основной цвет текста
        accent: string;  // Новый акцентный цвет текста
        // Устаревшие поля для обратной совместимости
        textNight?: string;
        textBlue?: string;
    };
    background: {
        lowWhite: string;
        white: string;
    };
    icon: {
        primary: string;
        accent: string;
        // Устаревшие поля
        iconNight?: string;
        iconRISD_Blue?: string;
    };
    contrast: {
        accent: string;
        // Устаревшие поля
        contrastRISD_Blue?: string;
    };
    border: {
        accent: string;
        platinum: string;
        // Устаревшие поля
        borderPlatinum?: string;
    };
}


const accentColor = '#0075F2'
const primaryColor = '#292F36'
export const lightTheme: Theme = {
    text: {
        primary: primaryColor,
        accent: accentColor,
        textNight: primaryColor,
        textBlue: accentColor,
    },
    background: {
        lowWhite: '#F6F6F6',
        white: '#FFFFFF',
    },
    icon: {
        primary: primaryColor,
        accent: accentColor,
        iconNight: primaryColor,
        iconRISD_Blue: accentColor,
    },
    contrast: {
        accent: accentColor,
        contrastRISD_Blue: accentColor,
    },

    border: {
        platinum: '#9A9A9A',
        accent: accentColor,
        borderPlatinum: '#9A9A9A',
    },
} as const
