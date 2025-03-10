import useWelcome from '@/hooks/useWelcome.ts';
import Welcome from '@/components/Welcome/Welcome.tsx'

const Main = () => {
    const [status, welcome] = useWelcome();
    return (
        <>
            <main>
                {status && <Welcome/>}
            </main>
        </>
    );
};

export default Main;
