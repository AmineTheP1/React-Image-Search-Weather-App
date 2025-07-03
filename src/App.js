import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import ImageSearch from './components/ImageSearch';
import WeatherDisplay from './components/WeatherDisplay';
import Home from './components/Home'; 

const Layout = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/weather">Weather</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <ImageSearch /> },
      { path: "/weather", element: <WeatherDisplay /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
