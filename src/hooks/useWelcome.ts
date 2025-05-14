import { EIsNew } from '@/types/redux/userSlice.types'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { selectUser, setOld } from '@/redux/slices/userSlice'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @version 1.0.5
 *
 */
const useWelcome = () => {
    const {isOld} = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (isOld === EIsNew.isNew) {
            dispatch(setOld())
            navigate('/welcome/')
        }
    }, [dispatch, isOld, navigate])
}
export default useWelcome
