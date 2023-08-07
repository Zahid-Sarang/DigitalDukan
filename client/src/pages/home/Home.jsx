import React from 'react'
import Header from '../../components/header/Header';
import HeroSection from "../../components/homeContent/HomeContent";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <HeroSection />
      </Header>
     
    </div>
  )
}

export default Home