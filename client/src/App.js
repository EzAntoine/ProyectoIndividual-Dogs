/* Styles */
import './App.css';
/* Hooks */
import {Route,Switch} from 'react-router-dom';
/* Components */
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateBreed from "./components/CreateBreed/CreateBreed";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/home/:id' component={Detail}/>
          <Route path='/createBreed' component={CreateBreed}/>
          {/* <Route path='/about' element={<About/>}/> */}
        </Switch>
      {/* {<h1>Henry Dogs</h1>} */}
      </div>
  );
}

export default App;
