import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>
        <Route path='/about' exact element= {<About/>}/>
        <Route path='/contact' exact element= {<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
