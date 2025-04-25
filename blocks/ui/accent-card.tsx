import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/shared/const";
import { FC, ReactNode } from "react";

export const AccentCard: FC<{
  children: ReactNode;
  title: ReactNode;
  className?: string;
  imageUrl?: string;
}> = ({ title, children, className, imageUrl }) => {
  return (
    <Card className={cn("gradient-orange relative text-white", className)}>
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
          src={IMAGES.LEMON_URL}
          className="right-2 -top-24 size-[180px]"
        />
      )}
    </Card>
  );
};
