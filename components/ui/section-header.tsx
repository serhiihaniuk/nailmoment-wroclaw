import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";

const wrapperVariants = cva("flex flex-col gap-3", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

const titleVariants = cva("font-semibold uppercase tracking-tight", {
  variants: {
    size: {
      sm: "text-2xl md:text-3xl",
      default: "text-3xl md:text-4xl",
      display: "text-4xl md:text-6xl",
    },
    tone: {
      default: "text-text-primary",
      inverse: "text-text-inverse",
      accent: "text-brand-brown",
    },
  },
  defaultVariants: {
    size: "default",
    tone: "default",
  },
});

const descriptionVariants = cva("max-w-[46ch] text-base leading-7 md:text-lg", {
  variants: {
    tone: {
      default: "text-text-muted",
      inverse: "text-text-inverse/80",
      accent: "text-brand-brown/80",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

type SectionHeaderProps = VariantProps<typeof wrapperVariants> &
  VariantProps<typeof titleVariants> & {
    as?: ElementType;
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  };

export function SectionHeader({
  align,
  as,
  className,
  description,
  descriptionClassName,
  eyebrow,
  size,
  title,
  titleClassName,
  tone,
}: SectionHeaderProps) {
  const HeadingTag = as ?? "h2";

  return (
    <div className={cn(wrapperVariants({ align }), className)}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag className={cn(titleVariants({ size, tone }), titleClassName)}>
        {title}
      </HeadingTag>
      {description ? (
        <p className={cn(descriptionVariants({ tone }), descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
