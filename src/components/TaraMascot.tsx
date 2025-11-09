import { Bird } from "lucide-react";

interface TaraMascotProps {
  message: string;
  position?: "bottom-right" | "top-left" | "top-right";
  emotion?: "happy" | "encouraging" | "thinking";
}

export const TaraMascot = ({ 
  message, 
  position = "bottom-right",
  emotion = "happy" 
}: TaraMascotProps) => {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
  };

  const emotionColors = {
    happy: "text-primary",
    encouraging: "text-accent",
    thinking: "text-secondary",
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 flex items-end gap-3 animate-slide-up`}>
      {/* Speech bubble */}
      <div className="relative max-w-xs bg-card border-2 border-primary/20 rounded-2xl px-4 py-3 shadow-xl">
        <p className="text-sm text-card-foreground leading-relaxed">{message}</p>
        {/* Tail */}
        <div className="absolute -right-2 bottom-4 w-4 h-4 bg-card border-r-2 border-b-2 border-primary/20 rotate-45" />
      </div>

      {/* Tara avatar */}
      <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center animate-bounce ${emotionColors[emotion]}`}>
        <Bird className="w-8 h-8" />
      </div>
    </div>
  );
};
