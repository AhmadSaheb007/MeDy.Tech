import "./App.css";
import "./responsive.css";
import Home from './components/pages/Home';
import { Routes, Route } from "react-router-dom";
import UserAs from './components/pages/UserAs';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import UserDashboard from "./components/pages/UserDashboard";
import Pet from './components/pages/Pet';
import HumanDetails from './components/pages/HumanDetails';

function App() {


  return (
    <>
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserAs" element={<UserAs />} />
          <Route path="/UserAs/PetOwnerSignUp" element={<SignUp title="Pet Owner"/>} />
          <Route path="/UserAs/DoctorSignUp" element={<SignUp title="Doctor"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/UserPets" element={<Pet />} />
          <Route path="/UserHumanDetails" element={<HumanDetails />} />
        </Routes>


      
      
    </>
  );
}

export default App;
