import { Outlet } from 'react-router-dom';
import MainComponent from '@/pages/main/main';

const Root = () => {
    return (
        <MainComponent>
            <Outlet />
        </MainComponent>
    );
};

export default Root;