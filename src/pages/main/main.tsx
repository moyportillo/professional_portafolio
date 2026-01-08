import type {ReactNode} from "react";
import HeaderComponent from '@/pages/main/header';
import {FooterComponent} from "@/pages/main/footer.tsx";

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <>
            <HeaderComponent/>
            <main className="pt-18">
            {children}
            </main>
            <FooterComponent/>
        </>);
};

export default MainComponent;