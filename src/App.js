// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Industry from './components/Industries'; // Import the Industry component
import Solutions from './components/Solutions'; // Import the Solutions component
import Training from './components/Training';
import SubmitForm from './components/SubmitForm';
import Academic from './components/Academic';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
            <section id="services">
                    <Services />
                </section>
                <section id="industries">
                    <Industry />
                </section>
                {/* <section id="Academic">
                    <Academic />
                </section>
                <section id="solutions">
                    <Solutions />
                </section>
                <section id="training">
                    <Training />
                </section>
                <section id="about">
                    <About />
                </section> */}
                <section id="contact">
                    <Contact />
                </section>
                <section id="SubmitForm">
                    <SubmitForm />
                </section>
            </main>
            <footer>
                <p>&copy; 2024 PRIME VISION TECHNOLOGIES. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;
