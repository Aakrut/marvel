import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
import Comics from './Pages/Comics'
import Series from './Pages/Series'
import Stories from './Pages/Stories'

function App() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }



  return (
    <Router>
      <GlobalStyle />

      <Sidebar isOpen={isOpen} toggle={ toggle }/>
      <Navbar toggle={toggle} />


      <Switch>
        
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/characters' exact>
          <Characters />
        </Route>

        <Route path='/comics' exact>
          <Comics />
        </Route>

        <Route path='/series' exact>
          <Series />
        </Route>

        <Route path='/stories' exact>
          <Stories />
        </Route>

        
      </Switch>
     
    </Router>
  );
}

export default App;
