import React from 'react';
import NavMenu from '../components/NavMenu/NavMenu';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import Choose from '../components/Choose/Choose';
import Container from '../components/Container/Container';

function Home() {
    return (
        <div>
        <NavMenu />
        <HeroSection />
        <Choose />
        <AboutUs />
        </div>
    )
}

export default Home
