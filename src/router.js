import { createBrowserRouter } from "react-router-dom";
import { Blogs, Contacts, Courses, Home } from './Pages';

export const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'courses', element: <Courses /> },
            { path: 'blogs', element: <Blogs /> },
            { path: 'contact', element: <Contacts /> },
        ]
    }
])