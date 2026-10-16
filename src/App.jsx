import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movies } from './pages/Movies';
import { Contact } from './pages/Contact';
import { AppLayout } from './component/layout/AppLayout';
import './App.css';
import ErrorPage from './pages/Error';
import { getAPIDATA } from './api/GetAPIData';
import MoviesDetail from './component/UI/MoviesCard';
import { getMovieDetail } from './api/GetMovieDetail';
const App = () => {
 
  /**
   * New way to make router
   */
  const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout />,
      errorElement:<ErrorPage /> ,
      children: [
      {
      path: '/',
      element: <Home />
      },

      {
      path: '/about',
      element: <About />
      },

      {
      path: '/movies',
      element: <Movies />,
      loader: getAPIDATA, 
      },

      {
      path: '/movies/:movieID',
      element: <MoviesDetail />,
      loader: getMovieDetail,
      },

      {
      path: '/contact',
      element: <Contact />
      },
     ]

    },

  ]);

  /**
   * Old way, by using helper react router
   */

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //        <Route path = '/' element = {<Home/>} />
  //        <Route path = '/about' element = {<About/>} />
  //        <Route path = '/movies' element = {<Movies/>} />
  //        <Route path = '/contact' element = {<Contact/>} />
  //     </Route>
  //   )
  // );


  return(
     <RouterProvider router={router} />
  ) 
};

export default App;