import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/Pages/HomePage';
import ServicesPage from './assets/Pages/ServicesPage';
import TrackingPage from './assets/Pages/TrackingPage';
import LoginRegisterPage from './assets/Pages/LoginRegisterPage';
import SignupPage from './assets/Pages/SignupPage';
import Help from './assets/Pages/Help';
import ProfilePage from './assets/Pages/ProfilePage';
import UserDashboard from './assets/Pages/Dashboard/UserDashboard';
import ItemSubmissionPage from './assets/Pages/ItemsubmissionPage';
import AdminPanel from './assets/Pages/AdminPanel'; // Import AdminPanel
import AboutPage from './assets/Pages/AboutPage';
// import ProfilePage from './assets/Pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/myprofile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/submit-item" element={<ItemSubmissionPage />} /> 
        <Route path="/admin" element={<AdminPanel />} /> {/* Add Admin Panel route */}
        
      </Routes>
    </Router>
  );
};

export default App;
