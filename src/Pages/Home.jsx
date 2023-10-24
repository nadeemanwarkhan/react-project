import React from 'react'
import Mission from '../Components/home/Mission'
import Compney from '../Components/Compney'
import Feature from '../Components/home/Feature'
import Courses from './Courses'
import Platform from '../Components/home/Platform'
import Cta from '../Components/Cta'
import Topic from '../Components/courses/Topic'
import Enrol from '../Components/Enrol'
import Aboutus from '../Components/Aboutus'
import Team from '../Components/home/Team'
import Blogs from './Blogs'
import { Hero } from '../Components'

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Compney />
      <Feature />
      <Courses />
      <Platform />
      <Cta />
      <Topic />
      <Enrol />
      <Aboutus />
      <Team />
      <Blogs />

    </>
  )
}

export default Home