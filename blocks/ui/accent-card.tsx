import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const AccentCard: FC<{
  children: ReactNode;
  title: ReactNode;
  className?: string;
  imageUrl?: string;
}> = ({ title, children, className, imageUrl }) => {
  return (
    <Card
      className={cn(
        "gradient-orange relative text-white animate-view-scale",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="ac-title font-semibold text-2xl flex flex-col">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-4 flex flex-col ac-content">
        {children}
      </CardContent>
      {imageUrl && (
        <DecorativeImage
          src={imageUrl}
          className="right-2 -top-24 size-[180px] animate-scroll-rotate"
        />
      )}
    </Card>
  );
};
