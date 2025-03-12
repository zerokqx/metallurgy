import { useEffect, useState } from 'react'

/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @param auto Параметр который отвечает за автоматическую регистрацию юзера
 * как не нового. Не возвращет Function регистрации юзера
 * @param debug при debug true пользователь будет всегда новым и status true.
 * По умолчанию false
 *
 */
const useWelcome = (auto:boolean=false,debug:boolean=false):[boolean,Function]|boolean =>{
    const keyName = "welcome"
    const trigger = localStorage.getItem(keyName);
    const [status,setStatus] = useState(true)
    useEffect(()=>{
        if (debug) return;
        else{
                auto && setWelcome()
                trigger ? setStatus(false):setStatus(true)


        }
    },[trigger])
    const setWelcome = () =>{
        if (!trigger) localStorage.setItem(keyName, "1")
    }

    return auto ? status : [status, setWelcome];}

export default useWelcome