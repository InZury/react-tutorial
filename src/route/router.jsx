import { createBrowserRouter } from "react-router-dom";
import { Title } from "../page/title";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Title />
        }
    ]
);