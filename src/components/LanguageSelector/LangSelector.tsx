import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { getCurrentLanguage, setLanguage } from '@/redux/slices/app.slice'
import { useTheme } from '@/hooks/useTheme'


export const LangSelector = ()=>{
    const lang = ["ru","en"]
    const dispatch = useAppDispatch()
    const currentLanguage = useAppSelector(getCurrentLanguage)
    const [,,,theme] = useTheme()
    return (
        <Select defaultValue={"ru"} onValueChange={(value)=>dispatch(setLanguage(value))}>
            <SelectTrigger style={{
                color:theme().text.primary,
                border: `2px solid ${theme().border.accent}`,
            }} className="w-[max-content]">
                <SelectValue placeholder={'ru'}/>
            </SelectTrigger>
            <SelectContent style={{
                zIndex: 999,
            }}>
                {lang.map((lang, ) => (
                    <SelectItem value={lang}>{lang}</SelectItem>

                ))}

            </SelectContent>
        </Select>
    )
}