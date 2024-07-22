import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminHome from './Components/AdminHome';
import UserHome from './Components/UserHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path='/user' element={<UserLogin/>}/>
        <Route path='/userhome/*' element={<UserHome/>}/>
        <Route path='/adminhome/*' element={<AdminHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
