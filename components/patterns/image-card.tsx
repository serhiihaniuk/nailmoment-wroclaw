import { Image } from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ImageCardProps = {
  caption: string;
  children?: ReactNode;
  url: string;
  className?: string;
};

export function ImageCard({
  caption,
  children,
  className,
  url,
}: ImageCardProps) {
  return (
    <Card className={cn("bg-surface-card text-text-primary", className)}>
      <CardContent className="flex flex-col gap-5">
        <Image url={url} alt="event" width={900} />
        <p className="text-center text-base leading-7 md:text-lg">{caption}</p>
        {children}
      </CardContent>
    </Card>
  );
}
