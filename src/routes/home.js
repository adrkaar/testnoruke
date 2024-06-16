import React from 'react';
import './home.css'
import gprofil from '../assets/gauteprofil.jpg'

function Home() {
    return (
        <div className="home">
            <WelcomeSection />
            <Footer />
        </div>
    );
}

function WelcomeSection() {
    return (
        <div className="App">
           <header className="App-header">
             <img src={gprofil} className="App-logo" alt="logo" />
             <p>
               Nettside under konstruksjon
             </p>
           </header>
         </div>
    );
}

function Footer() {
    return (
        <footer className="home-footer">
            <p>&copy; 2024 My Homepage. All rights reserved.</p>
        </footer>
    );
}

export default Home;
