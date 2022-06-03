import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/MyNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import BuyProduct from './components/BuyProduct/BuyProduct';
import Inquiry from './components/Inquiry/Inquiry';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signin/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyproduct/:id" element={
          <RequireAuth>
            <BuyProduct />
          </RequireAuth>
        } />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
