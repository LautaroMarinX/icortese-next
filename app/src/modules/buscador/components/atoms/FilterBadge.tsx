import { Badge } from '@/app/src/globals/components/UI/badge';
import React from 'react';
import { X } from 'lucide-react';

interface FilterBadgeProps {
  included: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ included, onClick, children }) => {
  return (
    <Badge
      variant={included ? "default" : "secondary"}
      className="min-w-14! capitalize flex items-center gap-1 cursor-pointer"
      onClick={onClick}
    >
      {children}
      {included && (
          <X size={14} />
      )}
    </Badge>
  );
};

export default FilterBadge;