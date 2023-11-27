/* Styles */
import './App.css';
/* Hooks */
import {Routes, Route} from "react-router-dom";
/* Components */
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateBreed from "./components/CreateBreed/CreateBreed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/createBreed' element={<CreateBreed/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
      {/* <h1>Henry Dogs</h1> */}
    </div>
  );
}

export default App;
