import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/app/src/globals/components/UI/button';

interface FilterButtonProps {
  included: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  included,
  onClick,
  children,
}) => {
  return (
    <Button
      size={"sm"}
      variant={included ? "default" : "secondary"}
      className="min-w-14! capitalize flex items-center gap-1 cursor-pointer"
      onClick={onClick}
    >
      {children}
      {included && <X size={14} />}
    </Button>
  );
};

export default FilterButton;