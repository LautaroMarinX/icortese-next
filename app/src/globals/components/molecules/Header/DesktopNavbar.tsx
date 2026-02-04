import { links } from '../../../utils/links'
import { LinkItem } from '../../atoms/LinkItem'

const DesktopNavbar = () => {
  return (
    <div className='gap-2 hidden lg:flex'>
        {
            links.map((link) => (
                <LinkItem key={link.href} link={link} />
            ))
        }
    </div>
  )
}

export default DesktopNavbar