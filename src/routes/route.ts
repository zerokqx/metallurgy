import { createBrowserRouter } from 'react-router'
import HeaderFooter from '@/components/layouts/HeaderFooter'
import WelcomePage from '@/pages/Welcome/Welcome.page'
import  { unionLang } from '@/dataFile/rainbowText.data'
import { dataHeader } from '@/dataFile/header.data'
import UserPage from '@/pages/User/User.page'
import { StankiPage } from '@/pages/Stanki/Stanki'

const router = createBrowserRouter([
    {
        path: '/',
        Component: HeaderFooter,
        loader: async () => {
            return dataHeader
        },
        children: [
            {
                path: 'welcome/',
                Component: WelcomePage,
                loader: async () => {
                    return unionLang
                },
            },
            {
                path: 'shop/',
                children:[
                    {
                        Component: StankiPage,
                        path: "stanki/"
                    }
                ]
            },
            {
                path: 'user/',
                children: [
                    {
                        path: 'profile',
                        Component: UserPage,
                    },
                ],
            },
        ],
    },
])

export default router

