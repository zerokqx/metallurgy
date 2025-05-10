import { EIsNew } from '@/types/redux/userSlice.types'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @version 1.0.5
 *
 */
const useWelcome = () => {
    const [state, setWelcome] = useLocalStorage<EIsNew>('welcome', EIsNew.isNew)
    const navigate = useNavigate()
    useEffect(() => {
        if (!state) {
            setWelcome(EIsNew.isOld)
            navigate('/welcome/')
        }
    }, [])
}

export default useWelcome
