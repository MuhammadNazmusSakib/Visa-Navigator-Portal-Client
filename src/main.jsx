import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import DataProvider from './Components/ContexApi/DataProvider';
import Register from './Components/Firebase/SignInAndSignOut/Register';
import Login from './Components/Firebase/SignInAndSignOut/LogIn';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AllVisas from './Components/Routes/AllVisas';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import AddVisa from './Components/PrivateRoutes/PrivateRouteComponents/AddVisa';
import MyAddedVisas from './Components/PrivateRoutes/PrivateRouteComponents/MyAddedVisas';
import MyVisaApplications from './Components/PrivateRoutes/PrivateRouteComponents/MyVisaApplications';
import ErrorPage from './Components/Home/Error';
import Home from './Components/Home/Home';
import VisaDetails from './Components/PrivateRoutes/PrivateRouteComponents/VisaDetails';
import Profile from './Components/PrivateRoutes/Profile/Profile';
import AboutUs from './Components/Routes/AboutUs';
import Contact from './Components/Routes/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/all-visas",
        element: <AllVisas />,
        loader: () => fetch('https://visa-navigator-portal-server-five.vercel.app/addedVisaData')
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "my-profile",
        element: <PrivateRoute><Profile/></PrivateRoute>,
        children: [
          {
            path: "add-visa",
            element: <AddVisa />
          },
          {
            path: "my-added-visas",
            element: <MyAddedVisas />,
            loader: () => fetch('https://visa-navigator-portal-server-five.vercel.app/addedVisaData')
          },
          {
            path: "my-visa-applications/email",
            element: <MyVisaApplications />,
          },
        ]
      },
      {
        path: "/visa-details/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://visa-navigator-portal-server-five.vercel.app/addedVisaData/${params.id}`)

      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
