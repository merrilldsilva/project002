
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './Create';


function App() {
  return (
    <Router>   
          <div className="App">
            <Navbar></Navbar>
              <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route exact path="/Create" element={<Create/>} />
              </Routes>
             </div> 
          </div>
    </Router>
 
  );
}

export default App;
