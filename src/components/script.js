import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router';
import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';
import { RestaurantMenuCard } from './RestaurantMenuCard';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
           <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenuCard/>
            }
        ],
        errorElement: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />);



