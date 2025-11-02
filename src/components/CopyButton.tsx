"use client";

import * as React from "react";
import { Copy, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The text content to copy to clipboard
   */
  text: string;
  /**
   * Optional label to display next to the icon
   */
  label?: string;
  /**
   * Duration to show the "copied" state in milliseconds
   * @default 2000
   */
  feedbackDuration?: number;
  /**
   * Size variant
   * @default "default"
   */
  size?: "sm" | "default" | "lg";
  /**
   * Show label on hover only (icon-only button by default)
   * @default false
   */
  showLabelOnHoverOnly?: boolean;
}

type CopyState = "idle" | "copied" | "error";

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      text,
      label,
      feedbackDuration = 2000,
      size = "default",
      showLabelOnHoverOnly = false,
      className,
      ...props
    },
    ref
  ) => {
    const [copyState, setCopyState] = React.useState<CopyState>("idle");
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    // Cleanup timeout on unmount
    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const handleCopy = async () => {
      // Check if Clipboard API is supported
      if (!navigator.clipboard) {
        setCopyState("error");
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopyState("idle"), feedbackDuration);
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopyState("copied");

        // Reset to idle state after feedback duration
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, feedbackDuration);
      } catch (error) {
        console.error("Failed to copy text:", error);
        setCopyState("error");

        // Reset to idle state after feedback duration
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, feedbackDuration);
      }
    };

    // Size variants
    const sizeClasses = {
      sm: "h-7 px-2 text-xs gap-1.5",
      default: "h-9 px-3 text-sm gap-2",
      lg: "h-11 px-4 text-base gap-2.5",
    };

    const iconSize = {
      sm: 14,
      default: 16,
      lg: 18,
    };

    // Determine what to display
    const showLabel = label && !showLabelOnHoverOnly;
    const showLabelOnHover = label && showLabelOnHoverOnly;

    // ARIA label for accessibility
    const ariaLabel =
      copyState === "copied"
        ? "Copied to clipboard"
        : copyState === "error"
        ? "Failed to copy"
        : label || "Copy to clipboard";

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleCopy}
        disabled={copyState === "copied"}
        aria-label={ariaLabel}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center",
          "rounded-md font-medium",
          "transition-all duration-200 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Theme-aware colors using CSS custom properties
          "bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-hover)]",
          "border border-[var(--color-border-secondary)] hover:border-[var(--color-border-primary)]",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
          // Copied state
          copyState === "copied" && [
            "bg-[var(--color-success)]/10",
            "border-[var(--color-success)]/30",
            "text-[var(--color-success)]",
          ],
          // Error state
          copyState === "error" && [
            "bg-[var(--color-error)]/10",
            "border-[var(--color-error)]/30",
            "text-[var(--color-error)]",
          ],
          // Size variant
          sizeClasses[size],
          // Hover label animation
          showLabelOnHover && "group relative",
          className
        )}
        {...props}
      >
        {/* Icon with animation */}
        <span
          className={cn(
            "transition-all duration-200",
            copyState === "idle" && "opacity-100 scale-100",
            copyState !== "idle" && "opacity-0 scale-75 absolute"
          )}
        >
          <Copy size={iconSize[size]} />
        </span>

        <span
          className={cn(
            "transition-all duration-200",
            copyState === "copied" && "opacity-100 scale-100",
            copyState !== "copied" && "opacity-0 scale-75 absolute"
          )}
        >
          <Check size={iconSize[size]} />
        </span>

        <span
          className={cn(
            "transition-all duration-200",
            copyState === "error" && "opacity-100 scale-100",
            copyState !== "error" && "opacity-0 scale-75 absolute"
          )}
        >
          <AlertCircle size={iconSize[size]} />
        </span>

        {/* Optional label */}
        {showLabel && (
          <span className="transition-opacity duration-200">
            {copyState === "copied"
              ? "Copied!"
              : copyState === "error"
              ? "Failed"
              : label}
          </span>
        )}

        {/* Hover-only label tooltip */}
        {showLabelOnHover && (
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
              "px-2 py-1 rounded-md text-xs font-medium",
              "bg-[var(--color-bg-tertiary)] border border-[var(--color-border-secondary)]",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-200",
              "pointer-events-none",
              // Position below button
              size === "sm" && "top-[calc(100%+4px)]",
              size === "default" && "top-[calc(100%+6px)]",
              size === "lg" && "top-[calc(100%+8px)]"
            )}
          >
            {copyState === "copied"
              ? "Copied!"
              : copyState === "error"
              ? "Failed to copy"
              : label}
          </span>
        )}
      </button>
    );
  }
);

CopyButton.displayName = "CopyButton";

export default CopyButton;
