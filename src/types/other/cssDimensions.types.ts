type TSizing = 'px' | 'rem' | 'vh' | 'vw' | 'fr'
type TSizeCss<T extends TSizing> = `${number}${T}`
export default TSizeCss
