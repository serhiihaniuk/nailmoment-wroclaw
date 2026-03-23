"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusCircle, MinusCircle } from "lucide-react"; // Import the icons

import { cn, mergeUi } from "@/shared/lib/utils";

function Accordion({
  uiId,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & { uiId?: string }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-ui={mergeUi(uiId ?? "accordion")}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  uiId,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & { uiId?: string }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-ui={mergeUi(uiId ?? "accordion-item")}
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  uiId,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & { uiId?: string }) {
  return (
    <AccordionPrimitive.Header data-ui={mergeUi(uiId, "header")} className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        data-ui={mergeUi(uiId ?? "accordion-trigger")}
        className={cn(
          "group",
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <span data-ui={mergeUi(uiId, "icon-wrap")} className="relative ml-auto shrink-0 pl-4">
          <MinusCircle
            data-ui={mergeUi(uiId, "icon-open")}
            strokeWidth={1}
            className={cn(
              "size-8 text-blue-foreground transition-opacity hidden group-data-[state=open]:block"
            )}
          />
          <PlusCircle
            data-ui={mergeUi(uiId, "icon-closed")}
            strokeWidth={1}
            className={cn(
              "size-8 text-blue-foreground transition-opacity block group-data-[state=open]:hidden"
            )}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  uiId,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & { uiId?: string }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      data-ui={mergeUi(uiId ?? "accordion-content")}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div data-ui={mergeUi(uiId, "inner")} className={cn("pt-0 pb-4", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
