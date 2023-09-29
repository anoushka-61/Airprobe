import logo from './logo.svg';

import Login from './components/Login';
import { Routes, Route, Link,Switch, Router } from 'react-router-dom';
import Signup from './components/Signup';
import MapView from './components/MapView';
import UserList from './components/UserList';
function App() {
  return (
   <>
    <Routes>
    
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Signup/>} />
    <Route path="/MapView" element={<MapView/>} />
    <Route path="/userlist" element={<UserList/>} />
    
    
    </Routes>
   </>
  );
}

export default App;
