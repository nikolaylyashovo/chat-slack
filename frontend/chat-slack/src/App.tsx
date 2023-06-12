
import './App.css';

import { PagesRouter } from './Components/PagesRouter';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <PagesRouter />
  </BrowserRouter>
  );
}

export default App;
