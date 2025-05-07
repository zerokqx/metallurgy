import TRainbowMap from '@/types/rainboxText.types'

const rainbowMap: Readonly<TRainbowMap[]> = [
    { text: 'Мы создаём ', bold: true },
    { text: 'будущее металлообработки — ' },
    { text: 'инновации', bold: true },
    { text: ', мастерство и качество в каждом изделии' },
]
const englishRainbowMap: Readonly<TRainbowMap[]> = [
    { text: 'We create ', bold: true }, // Перевод первого элемента
    { text: 'the future of metalworking — ' }, // Созданный второй элемент
    { text: 'innovation', bold: true }, // Перевод третьего элемента
    { text: ', craftsmanship, and quality in every product' }, // Перевод четвертого элемента
];
export const unionLang = {
    "ru": rainbowMap,
    "en": englishRainbowMap,
}


export default rainbowMap
