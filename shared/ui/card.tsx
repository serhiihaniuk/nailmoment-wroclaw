import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, mergeUi } from "@/shared/lib/utils";

const cardVariants = cva(
  "relative flex flex-col overflow-hidden rounded-3xl border shadow-card",
  {
    variants: {
      surface: {
        default: "border-border-subtle bg-surface-card text-text-primary",
        subtle: "border-transparent bg-surface-muted text-text-primary",
        accent: "border-transparent bg-brand-olive text-text-inverse",
      },
      spacing: {
        default: "py-6 md:py-8",
        compact: "py-4 md:py-5",
        none: "py-0",
      },
    },
    defaultVariants: {
      surface: "default",
      spacing: "default",
    },
  }
);

function Card({
  className,
  spacing,
  surface,
  uiId,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    uiId?: string;
  }) {
  return (
    <div
      data-slot="card"
      data-ui={mergeUi(uiId ?? "card")}
      className={cn(cardVariants({ spacing, surface }), className)}
      {...props}
    />
  );
}

function CardHeader({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-header"
      data-ui={mergeUi(uiId ?? "card-header")}
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 md:px-8 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-title"
      data-ui={mergeUi(uiId ?? "card-title")}
      className={cn("leading-tight font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-description"
      data-ui={mergeUi(uiId ?? "card-description")}
      className={cn("text-sm text-text-muted", className)}
      {...props}
    />
  );
}

function CardAction({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-action"
      data-ui={mergeUi(uiId ?? "card-action")}
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-content"
      data-ui={mergeUi(uiId ?? "card-content")}
      className={cn("px-6 md:px-8", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  uiId,
  ...props
}: React.ComponentProps<"div"> & { uiId?: string }) {
  return (
    <div
      data-slot="card-footer"
      data-ui={mergeUi(uiId ?? "card-footer")}
      className={cn("flex items-center px-6 md:px-8 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};
