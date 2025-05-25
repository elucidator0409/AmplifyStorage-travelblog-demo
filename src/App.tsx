import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Places from './components/Places';
import CreatePlace from './components/CreatePlace';
import PlacesDetails from './components/PlacesDetails';
import Auth from './components/Auth';


function App() {
  const router = createBrowserRouter([{
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/places",
        element: <Places />
      },
      {
        path: "/places/create",
        element: <CreatePlace />
      },
      {
        path: "/places/:id",
        element: <PlacesDetails />
      },
      {
        path: "/auth",
        element: <Auth />
      }
    ]
  }])

  return (
    <div className="wrapper">
          <RouterProvider router={router} />
    </div>
  )
}

export default App
