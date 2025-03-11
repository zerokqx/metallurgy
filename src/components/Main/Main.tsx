import useWelcome from '@/hooks/useWelcome.ts';
import Welcome from '@/components/Welcome/Welcome.tsx'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'

const Main = () => {
    /** TODO исправить костыль с 200px */
    const [status, welcome] = useWelcome();
    return (
        <>
            <main>
                {status && (
                        <Welcome/>

                )}
            </main>
        </>

    );
};

export default Main;
