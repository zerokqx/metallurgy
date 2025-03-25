type TSizing = 'px' | 'rem' | 'vh' | 'vw'
type TSizeCss<T extends TSizing> = `${number}${T}`
export default TSizeCss
