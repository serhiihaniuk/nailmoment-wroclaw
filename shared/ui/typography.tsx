import { cn, mergeUi } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

const titleVariants = cva(
  "font-montserrat font-black uppercase tracking-tight",
  {
    variants: {
      size: {
        card: "text-xl md:text-3xl",
        section: "text-3xl",
        articleLg: "text-2xl md:text-3xl",
        articleMd: "text-xl md:text-2xl",
        display: "text-3xl md:text-4xl",
        sm: "text-3xl md:text-5xl",
      },
      tone: {
        default: "text-text-primary",
        inverse: "text-text-inverse",
        accent: "text-brand-brown",
      },
      align: {
        left: "text-left",
        center: "text-center",
      },
    },
    defaultVariants: {
      size: "section",
      tone: "default",
      align: "center",
    },
  },
);

const textVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm leading-6",
      body: "text-base leading-7 md:text-lg",
      lead: "text-base font-medium leading-7 md:text-lg md:leading-8",
    },
    tone: {
      default: "text-text-primary",
      muted: "text-text-muted",
      inverse: "text-text-inverse/80",
      accent: "text-brand-brown/80",
    },
    align: {
      left: "text-left",
      center: "text-center",
    },
  },
  defaultVariants: {
    size: "body",
    tone: "default",
    align: "center",
  },
});

type TypographyTitleProps<T extends ElementType = "h2"> = {
  as?: T;
  uiId?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as"> &
  VariantProps<typeof titleVariants>;

export function TypographyTitle<T extends ElementType = "h2">({
  as,
  className,
  align,
  size,
  tone,
  uiId,
  ...props
}: TypographyTitleProps<T>) {
  const Comp = as ?? "h2";
  return (
    <Comp
      data-ui={mergeUi(uiId ?? "title")}
      className={cn(titleVariants({ align, size, tone }), className)}
      {...props}
    />
  );
}

type TypographyTextProps<T extends ElementType = "p"> = {
  as?: T;
  uiId?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as"> &
  VariantProps<typeof textVariants>;

export function TypographyText<T extends ElementType = "p">({
  as,
  className,
  align,
  size,
  tone,
  uiId,
  ...props
}: TypographyTextProps<T>) {
  const Comp = as ?? "p";
  return (
    <Comp
      data-ui={mergeUi(uiId ?? "text")}
      className={cn(textVariants({ align, size, tone }), className)}
      {...props}
    />
  );
}

const displayVariants = cva(
  "font-montserrat font-black uppercase tracking-normal leading-[1.1]",
  {
    variants: {
      size: {
        default: "text-5xl",
        lg: "text-6xl",
        sm: "text-4xl",
      },
      tone: {
        default: "text-text-primary",
        inverse: "text-text-inverse",
        accent: "text-brand-brown",
        olive: "text-brand-olive",
        gold: "text-brand-gold",
      },
      align: {
        left: "text-left",
        center: "text-center",
      },
    },
    defaultVariants: {
      size: "default",
      tone: "default",
      align: "center",
    },
  },
);

type TypographyDisplayProps<T extends ElementType = "span"> = {
  as?: T;
  uiId?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as"> &
  VariantProps<typeof displayVariants>;

export function TypographyDisplay<T extends ElementType = "span">({
  as,
  className,
  align,
  size,
  tone,
  uiId,
  ...props
}: TypographyDisplayProps<T>) {
  const Comp = as ?? "span";
  return (
    <Comp
      data-ui={mergeUi(uiId ?? "display")}
      className={cn(displayVariants({ align, size, tone }), className)}
      {...props}
    />
  );
}

export { titleVariants, textVariants, displayVariants };
