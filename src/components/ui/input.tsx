import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, containerClassName, ...props }, ref) => {
    return (
      <div className={cn(
        "flex items-center gap-2 bg-white/40 rounded-lg px-6",
        "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary/50",
        containerClassName
      )}>
        {icon}
        <input
          type={type}
          className={cn(
            "h-11 w-full bg-transparent text-base text-gray-700 placeholder:text-gray-500",
            "outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
