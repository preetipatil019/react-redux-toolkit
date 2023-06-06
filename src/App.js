import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import ProductCard from './components/ProductCard';
import Dashboard from './components/Dashboard';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <NavigationBar />,
      children: [
       {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/Cart",
          element: <ProductCard />
        },
        {
          path: "/Product",
          element: <Product />
        }
      ]
    }]
   )
   return (
    <div className="App">
       <RouterProvider router={appRouter} />
    </div>
  );
 
}

export default App;
