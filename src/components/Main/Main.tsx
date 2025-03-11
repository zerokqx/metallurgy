import useWelcome from '@/hooks/useWelcome.ts';
import Welcome from '@/components/Welcome/Welcome.tsx'
import { ContainerFlex } from '@/styledComponents/Containers.stl.ts'

const Main = () => {
    const [status, welcome] = useWelcome();
    return (
        <>
            <main>
                {status && (
                    <ContainerFlex maxHeight={"100vh"} maxWidth={"50%"}>
                        <Welcome/>
                    </ContainerFlex>
                )}
            </main>
        </>
    );
};

export default Main;
