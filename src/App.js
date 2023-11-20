import "./index.css";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import AuthHeader from './components/headers/AuthHeader';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { socket, SocketContext } from './socket';


const router = createBrowserRouter([
  {
    path: '/live-chat', element: <AuthHeader />, children: [

      { path: '/live-chat/signin', element: <Signin /> },
      { path: '/live-chat/login', element: <Login /> },
      { path: '/live-chat', element: <Home /> }
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
