
import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider} from './context/userContext';
import Dashboard from './Pages/Dashboard';


axios.defaults.baseURL = 'http://localhost:8000'//backend url
axios.defaults.withCredentials = true


function App() {
  return (
    <UserContextProvider>
      <div className=' min-h-screen bg-neutral-900 flex flex-col'>
        <Toaster position='top-center' toastOptions={{duration:2000}}/>
        <Routes>
          <Route
          path='/' element={<Home/>}/>
          <Route
          path='/register' element={<Register/>}/>
          <Route
          path='/login' element={<Login/>}/>
          <Route
          path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
      </UserContextProvider>
  );
}

export default App;
