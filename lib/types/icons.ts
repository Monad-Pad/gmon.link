import { LucideProps, Plus, Settings, User } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type IconName = "plus" | "settings" | "user";

export type IconType = {
    icon: IconName;
    featured: boolean;
}

export const Icons: Record<IconName, ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
    plus: Plus,
    settings: Settings,
    user: User,
  };
  
