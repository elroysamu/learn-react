import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router';
// import { About } from './About';
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

const About = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./About'));
    }, 3000); // 3-second delay
  })
);

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
                element: (
                     <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
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



