import gprofil from './assets/gauteprofil.jpg'
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={gprofil} className="App-logo" alt="logo" />
    //     <p>
    //       Nettside under konstruksjon
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
