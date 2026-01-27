import Root from '@/root.tsx';
import {createHashRouter, Navigate} from "react-router-dom";
import PrincipalComponent from "@/pages/main/principal.tsx";
import ContactoComponent from "@/pages/contacto/contacto.tsx";
import ProjectsComponent from "@/pages/proyectos/project.tsx";
import TechStackComponent from "@/pages/stack/stack.tsx";


export const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Navigate to="home" /> },
            { path: 'home', element: <PrincipalComponent /> },
            { path: 'stack', element: <TechStackComponent /> },
            { path: 'proyecto', element: <ProjectsComponent /> },
            { path: 'contacto', element: <ContactoComponent /> },
            { path: '*', element: <Navigate to="home" /> },
        ],
    },
]);