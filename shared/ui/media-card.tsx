import { Card, CardContent } from "@/shared/ui/card";
import { Image } from "@/shared/ui/image";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";
import { cn, mergeUi } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type MediaCardProps = {
  children: ReactNode;
  className?: string;
  surface?: "default" | "subtle" | "transparent";
  uiId?: string;
};

export function MediaCard({
  children,
  className,
  surface = "default",
  uiId,
}: MediaCardProps) {
  if (surface === "transparent") {
    return (
      <div
        data-ui={mergeUi(uiId, "card")}
        className={cn(
          "flex flex-col gap-4 [&_[data-ui$='-image']]:shadow-card",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <Card
      uiId={mergeUi(uiId, "card")}
      surface={surface === "subtle" ? "subtle" : "default"}
      spacing="none"
      className={cn("rounded-[2rem] text-text-primary", className)}
    >
      <CardContent
        uiId={mergeUi(uiId, "content")}
        className="flex flex-col gap-5 p-4 md:p-5"
      >
        {children}
      </CardContent>
    </Card>
  );
}

type MediaCardImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, "url"> & {
  url: string;
  uiId?: string;
};

export function MediaCardImage({
  alt = "",
  className,
  url,
  uiId,
  ...props
}: MediaCardImageProps) {
  return (
    <Image
      uiId={mergeUi(uiId, "image")}
      url={url}
      alt={alt}
      className={cn("w-full rounded-[1.4rem]", className)}
      {...props}
    />
  );
}

type MediaCardTextProps = {
  children: ReactNode;
  className?: string;
  uiId?: string;
};

export function MediaCardTitle({
  children,
  className,
  uiId,
}: MediaCardTextProps) {
  return (
    <TypographyTitle
      as="h3"
      size="card"
      align="center"
      uiId={mergeUi(uiId, "title")}
      className={className}
    >
      {children}
    </TypographyTitle>
  );
}

export function MediaCardText({ children, className, uiId }: MediaCardTextProps) {
  return (
    <TypographyText
      align="center"
      size="body"
      uiId={mergeUi(uiId, "text")}
      className={className}
    >
      {children}
    </TypographyText>
  );
}
