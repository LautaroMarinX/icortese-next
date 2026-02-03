import React from 'react'
import Logo from '../atoms/Logo'
import ContactInfo from '../molecules/Footer/ContactInfo'
import Disclaimer from '../molecules/Footer/Disclaimer'
import FollowUs from '../molecules/Footer/FollowUs'
import Explore from '../molecules/Footer/Explore'
import Copyright from '../molecules/Footer/Copyright'
import DevelopmentBy from '../molecules/Footer/DevelopmentBy'

const Footer = () => {
  return (
    <footer className="w-screen mt-28 h-fit bg-muted">
      <div className="container min-h-60 px-4 py-20 border-b mb-8 mx-auto gap-8 grid grid-cols-2 md:grid-cols-4">
        <Logo />
        <ContactInfo />
        <FollowUs />
        <Explore />
      </div>
      <div className="container mx-auto">
        <Disclaimer />
        <Copyright />
        <DevelopmentBy />
      </div>
    </footer>
  );
}

export default Footer