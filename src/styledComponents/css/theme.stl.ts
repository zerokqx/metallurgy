export interface Theme {
    text: {
        primary: string; // Новый основной цвет текста
        accent: string;  // Новый акцентный цвет текста
        // Устаревшие поля для обратной совместимости
        textNight?: string;
        textBlue?: string;
    };
    background: {
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


const accentColor = '#5277C3'
const primaryColor = '#0A0A0A'
export const lightTheme: Theme = {
    text: {
        primary: primaryColor,
        accent: accentColor,
        textNight: primaryColor,
        textBlue: accentColor,
    },
    background: {
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
