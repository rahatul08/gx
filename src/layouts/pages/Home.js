import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import Phases from '../../components/phasse/Phasse';
import Rewards from '../../components/rewards/Rewards';
import HeroSlider from '../../components/Slider/Slider';
import Token from '../../components/token/Token';

const Home = () => {
    return (
        <div>
            <Header/>
                <HeroSlider/>
            <Rewards/>
            <Token/>
            <Phases/>
            <Footer/>
        </div>
    );
};

export default Home;