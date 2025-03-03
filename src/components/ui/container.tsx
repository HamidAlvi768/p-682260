import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  fluid?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", fluid = false, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container }; 