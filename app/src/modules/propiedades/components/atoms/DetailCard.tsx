import React from 'react'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface DetailCardProps {
  Icon: IconComponent
  title: string
  description: string
}

const DetailCard = ({ Icon, title, description }: DetailCardProps) => {
  return (
    <div className="flex flex-row gap-4">
      <Icon className="size-4 mt-2" />
      <div className="flex flex-col">
        <h3 className="">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailCard