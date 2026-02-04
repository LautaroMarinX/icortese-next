
interface CardWithLogoProps{
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
    label: string;
}


const CardWithLogo = ({icon: Icon, label}: CardWithLogoProps) => {
  return (
    <div className="p-4 rounded-2xl flex flex-col ring ring-muted" >

        {Icon && (<Icon className="mb-12" />)}

      <p>{label}</p>
    </div>
  );
}

export default CardWithLogo