import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/usermaster/Login';
import Navbar from './components/usermaster/dashboardComponent/Navbar';
import Header from './components/usermaster/dashboardComponent/Header';
import Dashboard from './components/usermaster/dashboardComponent/Dashboard';
import Shipments from './components/usermaster/dashboardComponent/Shipments';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Navbar>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/shipments' element={<><Shipments/></>}/>
    </Routes>
    </Navbar>
    </BrowserRouter>
    </div>
  );
}

export default App;
