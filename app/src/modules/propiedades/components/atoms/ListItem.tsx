import React from 'react'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

export interface ListItemProps {
    value: {
        Icon?: IconComponent;
        label: string;
        value?: string | number | boolean | null;
    }
}

const ListItem = ({value}: ListItemProps) => {
  const hasValue = value.value !== undefined && value.value !== null && value.value !== "" && value.value !== false;
  return (
    <div className="flex flex-col ring ring-muted p-4 rounded-xl">
      <div className={`${hasValue ? "mb-4" : "" } flex gap-4`}>
        {value.Icon && <value.Icon />}
        <span className="">{value.label}</span>
      </div>
      {hasValue ? (
        <p>{typeof value.value === 'boolean' ? (value.value ? 'Sí' : 'No') : value.value}</p>
      ) : null}
    </div>
  );
}

export default ListItem