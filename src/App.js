import { Routes, Route } from "react-router-dom";
import Home from './routes/home';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
