import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import Preloader from "./Components/PreLoader";


function App() {

  const [load, upadateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
        {/* <Preloader load={load}  /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <HomePage/>
        </div>
    </div>
  );
}

export default App;
