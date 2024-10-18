import React from 'react'
import HeroSection from '../Content/Home/HeroSection'
import History from '../Content/Home/History'
import OurCoaches from '../Content/Home/OurCoaches'
import BestCricketCoaching from '../Content/Home/BestCricketCoaching'
import NCAInfo from '../Content/Home/NCAInfo'
import CricketersTable from '../Content/Home/CricketersTable'
import RegisteredNow from '../Content/Home/RegisteredNow'
import CricketDevelopment from '../Content/Home/CricketDevelopment'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <History/>
      <OurCoaches/>
      <CricketDevelopment/>
      <NCAInfo/>
      <BestCricketCoaching/>
      <CricketersTable/>
      <RegisteredNow/>

    </>
  )
}

export default Home
