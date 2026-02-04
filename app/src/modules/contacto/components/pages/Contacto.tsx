import AsideImage from '../molecules/AsideImage'
import ContactInfo from '../organisms/ContactInfo'

const Contacto = () => {
  return (
    <section className='container mx-auto h-fit grid md:grid-cols-3 gap-8 mt-28'>
        <AsideImage />
        <ContactInfo />
    </section>
  )
}

export default Contacto