import { Card, CardContent } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { FC } from "react";

export const ImageCaption: FC<{
  caption: string;
  url: string;
}> = ({ url, caption }) => {
  return (
    <Card className={"text-blue-foreground bg-transparent p-0"}>
      <CardContent className="gap-4 flex flex-col ac-content p-0">
        <Image url={url} />
        <p className="text-center w-[80%] self-center text-lg font-medium break-words">
          {caption}
        </p>
      </CardContent>
    </Card>
  );
};
