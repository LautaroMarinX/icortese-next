import React from 'react'
import Logo from '../atoms/Logo'
import ContactInfo from '../molecules/Footer/ContactInfo'
import Disclaimer from '../molecules/Footer/Disclaimer'
import FollowUs from '../molecules/Footer/FollowUs'
import Explore from '../molecules/Footer/Explore'

const Footer = () => {
  return (
    <footer className='w-screen mt-28 h-fit bg-muted'>
        <div className='container min-h-60 px-4 py-20 mx-auto gap-8 grid grid-cols-2 md:grid-cols-4'>
        <Logo />
        <ContactInfo />
        <FollowUs />
        <Explore />
        </div>
        <Disclaimer />
    </footer>
  )
}

export default Footer