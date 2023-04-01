import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Completion from './Form/Completion';
import FormValidation from './Form/FormValidation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormValidation></FormValidation>}></Route>
          <Route path='/success' element={<Completion></Completion>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
