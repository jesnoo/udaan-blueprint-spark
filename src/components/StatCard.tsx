import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "primary" | "success";
  className?: string;
}

export const StatCard = ({
  icon,
  label,
  value,
  subtitle,
  variant = "default",
  className,
}: StatCardProps) => {
  const variantStyles = {
    default: "bg-card border-border",
    primary: "bg-primary/10 border-primary/30",
    success: "bg-success/10 border-success/30",
  };

  const iconStyles = {
    default: "bg-primary/20 text-primary",
    primary: "bg-primary/30 text-primary",
    success: "bg-success/30 text-success",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconStyles[variant])}>
          {icon}
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};
