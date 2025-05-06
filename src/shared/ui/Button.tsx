import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

/**
 * Компонент кнопки с различными вариантами стилей и размеров
 * @component
 */

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md",
    {
        variants: {
            variant: {
                default: "bg-black text-white hover:bg-black/90",
                outline: "border border-black bg-transparent hover:bg-black/5",
                light: "bg-[#EEEEEE] text-black hover:bg-gray-200",
            },
            size: {
                default: "h-10 px-4 py-2",
                lg: "h-14 px-6 py-3 text-base",
            },
            rounded: {
                default: "rounded-md",
                full: "rounded-full",
                none: "rounded-none",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "default",
        },
    }
);

/**
 * Интерфейс пропсов кнопки
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 * @extends {VariantProps<typeof buttonVariants>}
 */
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

/**
 * Компонент кнопки
 * @param {ButtonProps} props - Пропсы кнопки
 * @returns {JSX.Element} Компонент кнопки
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, rounded, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { buttonVariants };