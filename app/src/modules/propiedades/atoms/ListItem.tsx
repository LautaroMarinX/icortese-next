import React from 'react'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface ListItemProps {
    value: {
        Icon?: IconComponent;
        label: string;
        value: string | number;
    }
}

const ListItem = ({value}: ListItemProps) => {
  return (
    <div className="flex flex-col ring ring-muted p-4 rounded-xl">
      <div className={`${value.value != "" ? "mb-4" : "" } flex gap-4`}>
        {value.Icon && <value.Icon />}
        <span className="">{value.label}</span>
      </div>
      {value.value ? <p>{value.value}</p> : null}
    </div>
  );
}

export default ListItem