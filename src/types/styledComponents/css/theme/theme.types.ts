export type TTheme = {
    text: {
        primary: string
        accent: string
        secondary: string // Дополнительный цвет текста
        disabled: string // Цвет для неактивного текста
    }
    background: {
        accent: string // Для тёмных фоновых элементов
        primary: string // Для полупрозрачных наложений
    }
    icon: {
        primary: string
        accent: string
        disabled: string // Иконки в отключённом состоянии
    }
    contrast: {
        accent: string
        highContrast: string // Для высококонтрастных элементов
    }
    border: {
        accent: string
        muted: string // Для невыделенных границ
    }
    glass: {
        accent: string
    }
    shadow: {
        light: string // Лёгкие тени
        dark: string // Тени для тёмных элементов
    }
    button: {
        primary: string // Основной цвет кнопок
        hover: string // Цвет при наведении
        disabled: string // Цвет для неактивных кнопок
    }
    state: {
        success: string // Цвет для успеха/положительных сообщений
        warning: string // Цвет для предупреждений
        error: string // Цвет для ошибок
        info: string // Цвет для информационных элементов
    }
}
export default TTheme
