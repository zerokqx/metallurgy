
import { z } from "zod"


export const DataNavScheme = z.array(z.object({
    text: z.string().nonempty(),
    link: z.string().optional(),
}))

export type DataNav = z.infer<typeof DataNavScheme>; 