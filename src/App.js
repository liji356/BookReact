import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstude from './components/Addbook';
import Addbook from './components/Addbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchbook from './components/Searchbook';

function App() {
  return (
    <>
    

<BrowserRouter>
<Routes>
<Route path="/" exact element={<Addbook/>}/>
<Route path="/booksearch" exact element={<Searchbook/>}/>
</Routes>
</BrowserRouter>
    </>
    
  );
}

export default App;
