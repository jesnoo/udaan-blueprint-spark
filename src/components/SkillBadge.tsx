import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  completed?: boolean;
  date?: string;
  className?: string;
}

export const SkillBadge = ({
  name,
  icon,
  completed = false,
  date,
  className,
}: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 min-w-[120px]",
        completed
          ? "bg-primary/10 border-primary shadow-md"
          : "bg-muted border-border opacity-60",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center relative",
          completed ? "bg-primary/20 text-primary" : "bg-muted-foreground/20 text-muted-foreground"
        )}
      >
        {icon}
        {completed && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </div>
      
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        {completed && date && (
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        )}
      </div>
    </div>
  );
};
