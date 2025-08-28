import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-azure-100 text-white shadow hover:bg-azure-200 font-medium",
        secondary:
          "bg-midnight text-white shadow hover:bg-azure-200 font-medium",
        outline:
          "bg-transparent text-white shadow hover:bg-azure-200 font-medium border-white hover:border-azure-200 border-[1px]",
        outlineTwo:
          "bg-transparent text-black font-medium border-black border-[1px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        filter: "bg-azure-100 text-white shadow hover:bg-azure-200 font-medium",
      },
      size: {
        default: "h-11 px-4 py-2 min-w-[115px] w-full rounded-lg text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-[52px] px-4 py-3 min-w-[100px] w-full rounded-lg text-base",
        lg: "h-12 px-4 py-2 min-w-[180px] w-full rounded-lg text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
