
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Book from './Pages/Book';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
     
    </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Book' element={<Book />}/>
    </Routes>
    </Router>
  );
}

export default App;
