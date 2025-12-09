import type {ReactNode} from "react";
import HeaderComponent from '@/pages/main/header';
import {FooterComponent} from "@/pages/main/footer.tsx";

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <section>
            <HeaderComponent/>
            {children}
            <FooterComponent/>
        </section>);
};

export default MainComponent;