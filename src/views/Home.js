import React from 'react'
import LandingHome from '../components/LandingHome/LandingHome'
import LandingSecond from '../components/LandingSecond/LandingSecond'
import NewsContainer from '../components/NewsContainer/NewsContainer'

const Home = () => {
  return (
    <div>
      <LandingHome />
      <NewsContainer />
      <LandingSecond />
    </div>
  )
}

export default Home