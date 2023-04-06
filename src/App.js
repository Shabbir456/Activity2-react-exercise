
import './App.css';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import AboutUs from './AboutUs';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <nav>
        
  <Link to='/Exercise1'>Exercise1    </Link>
  <Link to='/Exercise2'>Exercise2    </Link>
  <Link to='/Exercise3'>Exercise3    </Link>
  <Link to='/Exercise4'>Exercise4    </Link>
  <Link to='/AboutUs'>About Us</Link>
  
</nav>



      <Exercise1 />
      


      <Routes>
        <Route path = '/Exercise1' element = {<Exercise1/>} />
        <Route path = '/Exercise2' element = {<Exercise2/>} />
        <Route path = '/Exercise3' element = {<Exercise3/>} />
        <Route path = '/Exercise4' element = {<Exercise4/>} />
        <Route path = '/AboutUs' element = {<AboutUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;