import { ComponentPropsWithoutRef } from "react";
import { cn, mergeUi } from "@/shared/lib/utils";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

type BaseProps = ComponentPropsWithoutRef<"div"> & {
  uiId?: string;
};

export function ArticleSection({ className, uiId, ...props }: BaseProps) {
  return (
    <section
      data-ui={mergeUi(uiId ?? "article-section")}
      className={cn("border-t border-border-subtle pt-8 first:border-t-0 first:pt-0", className)}
      {...props}
    />
  );
}

export function ArticleHeading({
  className,
  uiId,
  tone = "inherit",
  ...props
}: Omit<ComponentPropsWithoutRef<typeof TypographyTitle>, "order" | "align"> & {
  uiId?: string;
  tone?: "inherit" | "default" | "accent" | "inverse";
}) {
  return (
    <TypographyTitle
      order="order3"
      tone={tone}
      align="left"
      data-ui={undefined}
      uiId={mergeUi(uiId ?? "article-heading")}
      className={cn("normal-case", className)}
      {...props}
    />
  );
}

export function ArticleSubheading({
  className,
  uiId,
  tone = "inherit",
  ...props
}: Omit<ComponentPropsWithoutRef<typeof TypographyTitle>, "order" | "align"> & {
  uiId?: string;
  tone?: "inherit" | "default" | "accent" | "inverse";
}) {
  return (
    <TypographyTitle
      order="order4"
      tone={tone}
      align="left"
      data-ui={undefined}
      uiId={mergeUi(uiId ?? "article-subheading")}
      className={cn("normal-case", className)}
      {...props}
    />
  );
}

export function ArticleText({
  className,
  uiId,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof TypographyText>, "size" | "tone" | "align"> & {
  uiId?: string;
}) {
  return (
    <TypographyText
      size="body"
      tone="inherit"
      align="left"
      data-ui={undefined}
      uiId={mergeUi(uiId ?? "article-text")}
      className={className}
      {...props}
    />
  );
}

export function ArticleList({
  as = "ul",
  className,
  tone = "default",
  uiId,
  ...props
}: BaseProps & {
  as?: "ul" | "ol";
  tone?: "default" | "danger";
}) {
  const listClassName = cn(
    as === "ol" ? "list-decimal" : "list-disc",
    "space-y-2 pl-5",
    tone === "danger" && "marker:text-red-700",
    className
  );

  if (as === "ol") {
    return (
      <ol
        data-ui={mergeUi(uiId ?? "article-list")}
        className={listClassName}
        {...(props as ComponentPropsWithoutRef<"ol">)}
      />
    );
  }

  return (
    <ul
      data-ui={mergeUi(uiId ?? "article-list")}
      className={listClassName}
      {...(props as ComponentPropsWithoutRef<"ul">)}
    />
  );
}

export function ArticleListItem({
  className,
  uiId,
  ...props
}: ComponentPropsWithoutRef<"li"> & { uiId?: string }) {
  return (
    <li
      data-ui={mergeUi(uiId ?? "article-list-item")}
      className={cn("text-base leading-7 md:text-lg", className)}
      {...props}
    />
  );
}

export function ArticleCallout({
  className,
  tone = "default",
  uiId,
  ...props
}: BaseProps & {
  tone?: "default" | "warning" | "danger" | "success";
}) {
  return (
    <div
      data-ui={mergeUi(uiId ?? "article-callout")}
      className={cn(
        "rounded-2xl px-4 py-3 font-semibold",
        tone === "danger"
          ? "border border-red-200 bg-red-50 text-red-900"
          : tone === "success"
            ? "border border-emerald-200 bg-emerald-50 text-emerald-950"
          : tone === "warning"
            ? "border border-yellow-200 bg-yellow-50 text-brand-brown"
          : "border border-brand-brown/15 bg-white/70 text-brand-brown",
        className
      )}
      {...props}
    />
  );
}
