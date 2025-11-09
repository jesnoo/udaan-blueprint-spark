import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface LessonCardProps {
  title: string;
  description?: string;
  progress?: number;
  icon?: ReactNode;
  estimatedTime?: string;
  onClick?: () => void;
  variant?: "default" | "active" | "locked";
  className?: string;
}

export const LessonCard = ({
  title,
  description,
  progress,
  icon,
  estimatedTime,
  onClick,
  variant = "default",
  className,
}: LessonCardProps) => {
  const variantStyles = {
    default: "bg-card hover:bg-card/90 border-border cursor-pointer hover:shadow-xl hover:scale-102",
    active: "bg-primary/10 border-primary shadow-lg shadow-primary/20 cursor-pointer hover:shadow-xl hover:scale-102",
    locked: "bg-muted border-border opacity-60 cursor-not-allowed",
  };

  return (
    <div
      onClick={variant !== "locked" ? onClick : undefined}
      className={cn(
        "relative rounded-2xl border-2 p-6 transition-all duration-200",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
          )}
          
          {estimatedTime && (
            <p className="text-xs text-muted-foreground">⏱️ {estimatedTime}</p>
          )}

          {progress !== undefined && (
            <div className="mt-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
