import Link from 'next/link';
import React from 'react'

const DevelopmentBy = () => {
  return (
    <div className="flex mb-4">
      <p>
        Desarrollado por <Link target='_blank' className="hover:text-blue-500 duration-300" href="https://googlobal.com">Googlobal AI</Link>
      </p>
    </div>
  );
}

export default DevelopmentBy