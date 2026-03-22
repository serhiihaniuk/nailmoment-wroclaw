import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

export const ImageCaption: FC<{
  caption: string;
  url: string;
}> = ({ url, caption }) => {
  return (
    <Card className={"text-blue-foreground bg-transparent p-0"}>
      <CardContent className="gap-4 flex flex-col ac-content p-0">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={url}
            alt="image"
            className="h-auto w-full rounded-lg object-cover object-center"
          />
        </div>
        <p className="text-center w-[80%] self-center text-lg font-medium break-words">
          {caption}
        </p>
      </CardContent>
    </Card>
  );
};
