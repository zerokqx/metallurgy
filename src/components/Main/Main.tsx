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
                    <ContainerFlex direction={'column'} padding={"20px"} x={"center"} y={"center"} height={"100%"} width="500px">
                        <Welcome/>
                    </ContainerFlex>
                )}
            </main>
        </>
    );
};

export default Main;
