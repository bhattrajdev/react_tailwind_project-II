import React from 'react'
import { Hero,Movies } from '../components';
const Home = () => {
  return (
    <>
      <Hero />
      <Movies name="Trending" onbasisof="watchedCount" />
      <Movies name="This Year" onbasisof="year" />
    </>
  );
}

export default Home