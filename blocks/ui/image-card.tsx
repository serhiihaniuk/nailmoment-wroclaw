import { Card, CardContent } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const ImageCard: FC<{
  children?: ReactNode;
  caption: string;
  url: string;
  className?: string;
}> = ({ url, children, caption, className }) => {
  return (
    <Card className={cn("bg-white text-blue-foreground shadow-2xl", className)}>
      <CardContent className="gap-5 flex flex-col ac-content">
        <Image url={url} alt="abcde" />
        <p className="text-center text-lg break-words">{caption}</p>
        {children}
      </CardContent>
    </Card>
  );
};
