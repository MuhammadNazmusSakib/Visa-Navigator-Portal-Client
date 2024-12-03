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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
        element: <AllVisas />
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa/>
          </PrivateRoute>
        )
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas/>
          </PrivateRoute>
        )
      },
      {
        path: "/my-visa-applications",
        element: (
          <PrivateRoute>
            <MyVisaApplications/>
          </PrivateRoute>
        )
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
