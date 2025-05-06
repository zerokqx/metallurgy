import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectStyled } from '@/styledComponents/Select'


export const LangSelector = ()=>{
    const lang = ["ru","en"]


    return (
        <Select defaultValue={"dw"}>
            <SelectStyled className="w-[100px]">
            </SelectStyled>
            <SelectContent>
                {lang.map((lang, ) => (
                    <SelectItem value={lang}>{lang}</SelectItem>

                ))}

            </SelectContent>
        </Select>
    )
}