import { Activity } from "react";

interface HeaderResumeItemProps {
  caracteristica: string;
  cantidad: number;
}

export const HeaderResumeItem = ({ caracteristica, cantidad }: HeaderResumeItemProps) => {
  return (
    <Activity mode={cantidad > 0 ? "visible" : "hidden"}>
      <li>
        {cantidad} {caracteristica}
      </li>
    </Activity>
  );
};
