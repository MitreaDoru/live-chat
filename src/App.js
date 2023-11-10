import "./index.css";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import AuthHeader from './components/headers/AuthHeader';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { socket, SocketContext } from './socket';


const router = createBrowserRouter([
  {
    path: '/', element: <AuthHeader />, children: [

      { path: '/signin', element: <Signin /> },
      { path: '/login', element: <Login /> },
      // { path: '/resetpassword', element: <ResetPassword /> }
      { path: '/', element: <Home /> }
    ],
  },
])


const App = () => {


  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={router} />
    </SocketContext.Provider>
  );
};

export default App;
