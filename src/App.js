import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar/MyNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
