import Root from '@/root.tsx';
import {createBrowserRouter, Navigate} from "react-router-dom";
import PrincipalComponent from "@/pages/main/principal.tsx";
import DoctrinaComponent from "@/pages/doctrina/doctrina.tsx";
import MinisteriosComponent from "@/pages/ministerios/ministerio.tsx";
import ContactoComponent from "@/pages/contacto/contacto.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Navigate to="home" /> },
            { path: 'home', element: <PrincipalComponent /> },
            { path: 'doctrina', element: <DoctrinaComponent /> },
            { path: 'ministerios', element: <MinisteriosComponent /> },
            { path: 'contacto', element: <ContactoComponent /> },
            { path: '*', element: <Navigate to="home" /> },
        ],
    },
]);