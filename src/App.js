import './App.css';
import { useRoutes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/router';
import { Toaster } from 'react-hot-toast';
import Loading from './share/component/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from './redux/action/homeAction';
// import { ScriptTag } from 'react-script-tag'
import "./util/sass/main.css";

function App() {

    const jwt = localStorage.getItem('jwt');

    const {statusLoading} = useSelector(state=>state.home);
  
    const checkRole = () => {
      if (jwt) {
        return privateRoutes;
      } else {
        return publicRoutes;
      }
    };

    const routes = useRoutes(checkRole());

    const dispatch = useDispatch();

    const {pathname} = window.location;

     useEffect(()=> {
        let script = document.createElement("script");
        let script2 = document.createElement("script");
        let script3 = document.createElement("script");
        let script4 = document.createElement("script");
        let script5 = document.createElement("script");
        let script6 = document.createElement("script");
        let script7 = document.createElement("script");
        let script8 = document.createElement("script");
        let script9 = document.createElement("script");
        let script10 = document.createElement("script");
        let script11 = document.createElement("script");
        let script12 = document.createElement("script");
        let script13 = document.createElement("script");
        let script14 = document.createElement("script");
        let script15 = document.createElement("script");
        let script16 = document.createElement("script");
        script.src = "/js/utils/app.js";
        script2.src = "/js/vendor/xm_plugins.min.js";
        script3.src = "/js/form/form.utils.js";
        script4.src = "/js/landing/landing.tabs.js";
        script5.src = "/js/utils/svg-loader.js";
        script6.src = "/js/utils/page-loader.js";
        script7.src = "/js/vendor/simplebar.min.js";
        script8.src = "/js/utils/liquidify.js";
        script9.src = "/js/vendor/tiny-slider.min.js";
        script10.src = "/js/vendor/Chart.bundle.min.js";
        script11.src = "/js/global/global.hexagons.js";
        script12.src = "/js/global/global.tooltips.js";
        script13.src = "/js/global/global.charts.js";
        script14.src = "/js/header/header.js";
        script15.src = "/js/sidebar/sidebar.js";
        script16.src = "/js/content/content.js";
        script.async = true;
        script2.async = true;
        script3.async = true;
        script4.async = true;
        script5.async = true;
        script6.async = true;
        script7.async = true;
        script8.async = true;
        script9.async = true;
        script10.async = true;
        script11.async = true;
        script12.async = true;
        script13.async = true;
        script14.async = true;
        script15.async = true;
        script16.async = true;
        let script17 = document.createElement("script");
  
        script17.src = "/js/global/global.popups.js";
        script17.async = true;
        document.body.appendChild(script);
        document.body.appendChild(script10);
        document.body.appendChild(script13);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
        document.body.appendChild(script4);
        document.body.appendChild(script5);
        document.body.appendChild(script6);
        document.body.appendChild(script7);
        document.body.appendChild(script8);
        document.body.appendChild(script9);
        document.body.appendChild(script11);
        document.body.appendChild(script12);
        // document.body.appendChild(script14);
        document.body.appendChild(script15);
        document.body.appendChild(script16);
        document.body.appendChild(script17);
        setTimeout(()=> {
          dispatch(setLoading({
            status: 'done'
          }))
        }, 500)
        return () => {
          document.body.removeChild(script);
          document.body.removeChild(script10);
          document.body.removeChild(script13);
          document.body.removeChild(script2);
          document.body.removeChild(script3);
          document.body.removeChild(script4);
          document.body.removeChild(script5);
          document.body.removeChild(script6);
          document.body.removeChild(script7);
          document.body.removeChild(script8);
          document.body.removeChild(script9);
          document.body.removeChild(script11);
          document.body.removeChild(script12);
          document.body.removeChild(script14);
          document.body.removeChild(script15);
          document.body.removeChild(script16);
          document.body.removeChild(script17);
        }
     }, [pathname])

    useEffect(()=> {
      dispatch(setLoading({
        status: 'isLoading'
      }))
      setTimeout(()=> {
        dispatch(setLoading({
          status: 'done'
        }))
      }, 500)
    }, [])

    return (
      <>
        {statusLoading && <Loading/>}
        <div>{routes}</div>
        <Toaster position='top-right'/>
      </>
    );
}

export default App;
