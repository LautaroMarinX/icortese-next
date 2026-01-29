import React, { Activity } from 'react'
import BasicInfoWrapper from '../atoms/BasicInfoWrapper';
import ListItem from '../atoms/ListItem';


interface InfoItem {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string | number | boolean;
}

interface InformationRenderProps {
  info: InfoItem[];
  className?: string;
  title: string;
  Element: React.ComponentType<{ value: InfoItem }>;
}


const InformationRender = ({
  info,
  title,
  className,
  Element,
}: InformationRenderProps) => {
  return (
    <section className="container mx-auto mb-8 border-b border-muted pb-8">
      <div className="flex flex-col">
        <h3 className="text-xl mb-4">{title}</h3>
        <ul
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${className || ""}`}
        >
          {info.map((value) => (
            <Activity mode={value.value || value.label ? "visible" : "hidden"} key={value.label}>
              <Element key={value.label} value={value} />
            </Activity>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InformationRender