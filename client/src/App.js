
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Discussion from './component/Discussion';
import Cources from './component/Cources';
import Dashboard from './component/Dashboard';
import Edit from './component/Edit';
import { Route,Routes } from 'react-router-dom';
import EditAccount from './component/EditAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cource' element={<Cources/>}/>
        <Route path='/discussion' element={<Discussion/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>

    </div>
  );
}

export default App;
