import React             from "react";
import                        "./styles/app.scss"
import Temp              from './tmp'
import { BrowserRouter, 
  Routes, 
  Route,
  Navigate }             from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Temp />}/>
        </Routes>
        {/* <Navigate to={`f${(+new Date()).toString(16)}`}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
