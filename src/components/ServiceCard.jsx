import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function ServiceCard({ icon, title, description, cta, to }) {
  return (
    <Link
      to={to}
      className="bg-surface border border-outline/30 p-8 hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
        <Icon name={icon} className="text-[32px] text-primary" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">{description}</p>
      <div className="flex items-center text-primary font-label-md text-label-md group-hover:gap-3 transition-all gap-2">
        {cta} <Icon name="arrow_forward" className="text-[18px]" />
      </div>
    </Link>
  );
}
