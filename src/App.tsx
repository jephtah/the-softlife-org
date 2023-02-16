import React, {useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Homepage } from './pages/home';
import { allRoute } from './data/route';
import { Navbar } from './component/navbar';
import { Error } from './pages/error';

function App() {
  const [dimensions, setDimensions] = React.useState({
    top: window.pageYOffset
  });
  const handleResize = () => {
    setDimensions({
      top: window.pageYOffset
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleResize, false);
  }, []);
  return (
    <div className="App">
      <Navbar top={dimensions.top} />
      <Switch>
        <Route exact path="/" component={Homepage} /> 
        {
          allRoute.map((item,index)=> (
            <Route exact path={item.path} component={item.component} /> 
          ))
        }
        <Route component={Error} /> 
      </Switch>
    </div>
  );
}

export default App;
