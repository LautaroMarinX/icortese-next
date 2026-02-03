import { Check } from "lucide-react";
import React from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface CheckItemProps {
  value: {
    Icon?: IconComponent;
    label: string;
    value: string | number;
  };
}

const CheckItem = ({ value }: CheckItemProps) => {
  return (
    <li className="flex items-center"><Check  className="size-5 me-2"/> {value.label}</li>
  );
};

export default CheckItem;
