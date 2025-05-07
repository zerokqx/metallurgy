import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { getCurrentLanguage, isDirtyLang, setLanguage } from '@/redux/slices/app.slice'
import { selectTheme } from '@/redux/slices/theme.slice'
import { usePreferredLanguage } from '@uidotdev/usehooks'
import { useEffect, useMemo } from 'react'

export const LangSelector = () => {
    const langOnBrowser = usePreferredLanguage()
    const dispatch = useAppDispatch()
    const currentLanguage = useAppSelector(getCurrentLanguage)
    const dirty = useAppSelector(isDirtyLang)
    const theme = useAppSelector(selectTheme)
    const lang = useMemo(()=>['ru', 'en'],[])
    useEffect(() => {
        if (lang.includes(langOnBrowser) && !dirty) {
            dispatch(setLanguage(langOnBrowser))
        }
    }, [dirty, dispatch, lang, langOnBrowser])
    return (
        <Select
            value={currentLanguage}
            onValueChange={(value) => dispatch(setLanguage(value))}
        >
            <SelectTrigger
                style={{
                    color: theme.text.primary,
                    border: `2px solid ${theme.border.accent}`,
                }}
                className="w-[max-content]"
            >
                <SelectValue  />
            </SelectTrigger>
            <SelectContent
                style={{
                    zIndex: 999,
                }}
            >
                {lang.map((lang) => (
                    <SelectItem value={lang}>{lang}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
