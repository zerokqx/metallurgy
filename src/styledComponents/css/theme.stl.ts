export interface Theme {
    text: {
        textNight: string;
    };
    background: {
        white: string;
    };
    icon: {
        iconNight: string;
        iconRISD_Blue: string;
    };
    contrast: {
        contrastRISD_Blue: string;
    };
    border: {
        borderPlatinum: string;
    };
}


export const lightTheme:Theme = {
    text: {
        textNight: "#0A0A0A"
    },
    background: {
        white: "#fff",
    },
    icon: {
        iconNight: "#0A0A0A",
        iconRISD_Blue: "#3A44FF"
    },
    contrast: {
        contrastRISD_Blue: "#3A44FF"
    },
    border: {
        borderPlatinum: "#9a9a9a"
    }
}