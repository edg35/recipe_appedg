import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
