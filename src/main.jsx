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
        path: "/visa-details/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://visa-navigator-portal-server-five.vercel.app/addedVisaData/${params.id}`)

      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        )
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
        loader: () => fetch('https://visa-navigator-portal-server-five.vercel.app/addedVisaData')
      },
      {
        // path: "/my-visa-applications/:email",
        path: "/my-visa-applications/email",
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
        // loader: ({params}) => fetch(`https://visa-navigator-portal-server-five.vercel.app/applicationData/email/${params.email}`)
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
