import React from "react";
import { cn } from "@/lib/utils";

export function FullWidthBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {children}
    </div>
  );
}

function Background({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("absolute inset-0 w-full h-full", className)}>{children}</div>;
}

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 container mx-auto px-4", className)}>
      {children}
    </div>
  );
}

FullWidthBackground.Background = Background;
FullWidthBackground.Content = Content;
