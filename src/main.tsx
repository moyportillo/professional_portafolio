import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {router} from '@/rooters/rooter'
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
