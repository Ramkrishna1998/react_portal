import react, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage/loginPage';
import Dashboard from './components/Dashboard/dashboard';
import Registration from './components/Registration/registration'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Auth/auth';

function App() {
  const [initialData, setInitialData] = useState({});
  const [itemList, setItemList] = useState(initialData);
  const [userCredentials, setUserCredentials] = useState([]);

  return (
    <Routes>
      <Route exact path="/" element={<LoginPage userCredentials={userCredentials} />} />
      <Route path="/registration" element={<Registration itemList={itemList} setItemList={setItemList} initialData={initialData} setInitialData={setInitialData} userCredentials={userCredentials} setUserCredentials={setUserCredentials} />} />
      <Route  element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard initialData={initialData} setInitialData={setInitialData} itemList={itemList} setItemList={setItemList} />} />        
      </Route>
    </Routes>

  );
}

export default App;
