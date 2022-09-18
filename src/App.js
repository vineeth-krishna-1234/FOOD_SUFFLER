import Header from './header.js';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import InputComponent from './inputcomponent'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<InputComponent />}/>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App;
