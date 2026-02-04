import { Badge } from '@/app/src/globals/components/UI/badge';
import React from 'react'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface ListItemProps {
    value: {
        Icon?: IconComponent;
        label: string;
    value?: string | number | boolean | null;
    }
}

const ListItem = ({value}: ListItemProps) => {
  return (
    <Badge variant={"outline"} className="flex flex-col ring ring-muted rounded-full px-3.5 py-2">
        {value.Icon && <value.Icon />}
        {value.label}
    </Badge>
  );
}

export default ListItem