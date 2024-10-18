import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from '../../App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import RegistrationForm from '../pages/RegistrationForm';
import Center from '../pages/Center';
import Gallery from '../pages/Gallery';
import ContactUs from '../pages/ContactUs';
import About from '../pages/About';




export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'gallery',
          element: <Gallery />,
        },
        {
            path: 'our-center',
            element: <Center />,
          },
          {
            path: 'registration-form',
            element: <RegistrationForm />,
          },
          {
            path: 'contact-us',
            element: <ContactUs />,
          },
    ]
}
])