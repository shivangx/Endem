// App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialMediaLinks from './components/SocialMediaLinks';
import LocationSection from './components/LocationSection';
import TodoList from './components/TodoList';
import Calculator from "./components/Calculator"; // Assuming this is your main component

const App = () => {
    return (
        <div className="container">
            <Header />
            <TodoList />
            <Calculator/>
            <SocialMediaLinks />
            <LocationSection />
            <Footer />
        </div>
    );
};

export default App;
