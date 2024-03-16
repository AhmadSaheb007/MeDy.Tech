import "./App.css";
import Home from './components/pages/Home';
import { Routes, Route } from "react-router-dom";
import UserAs from './components/pages/UserAs';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  //   const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  // ]);


  return (
    <>
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserAs" element={<UserAs />} />
          <Route path="/UserAs/PetOwnerSignUp" element={<SignUp title="Pet Owner"/>} />
          <Route path="/UserAs/DoctorSignUp" element={<SignUp title="Doctor"/>} />
          <Route path="/login" element={<Login />} />
        </Routes>


      
      
    </>
  );
}

export default App;
