import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/router';
import toast, { Toaster } from 'react-hot-toast';

import "./util/sass/main.css";


function App() {

    const jwt = localStorage.getItem('jwt')
  
    const checkRole = () => {
      if (jwt) {
          return privateRoutes;
      } else {
        return publicRoutes;
      }
    };
    const routes = useRoutes(checkRole());

    return (
      <>
        <div>{routes}</div>
        <Toaster position='top-right'/>
      </>
    );
}

export default App;
