import { createBrowserRouter } from 'react-router'
import HeaderFooter from '@/components/layouts/HeaderFooter'
import WelcomePage from '@/pages/Welcome/Welcome.page'

const router = createBrowserRouter([
    {
        path: '/',
        Component: HeaderFooter,
        children: [
            {
                path: 'welcome/',
                Component: WelcomePage,
            },
        ],
    },
])

export default router
