import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Education from './pages/Education';
import Home from './pages/Home';
import Project from './pages/Project';
import Layout from './layout/Layout';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'education',
          element: <Education />,
        },
        {
          path: 'project',
          element: <Project />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
