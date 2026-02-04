import React from 'react'
import BannerText from '../molecules/Banner/BannerText'

const Banner = () => {
  return (
    <section className="container mx-auto mb-8 intersect:motion-preset-fade intersect:motion-duration-700">
      <BannerText />
    </section>
  );
}

export default Banner