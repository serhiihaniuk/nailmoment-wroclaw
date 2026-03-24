import { cn, mergeUi } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

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

type SectionHeaderProps = VariantProps<typeof wrapperVariants> &
  {
    as?: ElementType;
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    order?: "order1" | "order2" | "order3" | "order4";
    tone?: "default" | "inverse" | "accent";
    uiId?: string;
  };

export function SectionHeader({
  align,
  as,
  className,
  description,
  descriptionClassName,
  eyebrow,
  order,
  title,
  titleClassName,
  tone,
  uiId,
}: SectionHeaderProps) {
  const HeadingTag = as ?? "h2";

  return (
    <div
      data-ui={mergeUi(uiId ?? "section-header")}
      className={cn(wrapperVariants({ align }), className)}
    >
      {eyebrow ? (
        <span
          data-ui={mergeUi(uiId, "eyebrow")}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted"
        >
          {eyebrow}
        </span>
      ) : null}
      <TypographyTitle
        as={HeadingTag}
        align={align}
        order={order}
        tone={tone}
        uiId={mergeUi(uiId, "title")}
        className={titleClassName}
      >
        {title}
      </TypographyTitle>
      {description ? (
        <TypographyText
          align={align}
          size="sm"
          tone={tone === "default" ? "muted" : tone}
          uiId={mergeUi(uiId, "description")}
          className={descriptionClassName}
        >
          {description}
        </TypographyText>
      ) : null}
    </div>
  );
}
