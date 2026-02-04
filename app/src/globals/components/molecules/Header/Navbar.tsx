import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <nav className='ms-8 flex-1 flex justify-end lg:justify-start'>
        <DesktopNavbar />
        <MobileNavbar />
    </nav>
  )
}

export default Navbar