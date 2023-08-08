import React from 'react'
import Header from '../../components/header/Header';
import HomeContent from "../../components/homeContent/HomeContent";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <HomeContent />
      </Header>
     
    </div>
  )
}

export default Home