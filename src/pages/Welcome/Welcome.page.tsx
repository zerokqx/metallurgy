import Welcome from '@/components/Welcome/Welcome.tsx'
import useWelcome from '@/hooks/useWelcome.ts'

const WelcomePage = () => {
    const [status] = useWelcome()
    return <main>{status && <Welcome />}</main>
}

export default WelcomePage
