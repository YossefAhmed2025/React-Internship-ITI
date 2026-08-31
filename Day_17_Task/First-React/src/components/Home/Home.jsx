import { useState } from 'react'

import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Counter from '../Counter/Counter.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Home() {
  let [userName, setUserName] = useState('Youssef Ahmed')

  let links = ['Home', 'Counter']

  return (
    <>
      <Navbar brand="First React" links={links} />

      <Hero
        title="First React Project"
        userName={userName}
        onUserNameChange={setUserName}
      />

      <Counter title="Counter" />

      <Footer author={userName} />
    </>
  )
}
