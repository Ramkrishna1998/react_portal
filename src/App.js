import './App.css';
import LoginPage from './components/LoginPage/loginPage';
import Dashboard from './components/Dashboard/dashboard';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Auth/auth';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route  element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>

  );
}

export default App;
