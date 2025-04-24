import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const AccentCard: FC<{
  children: ReactNode;
  title: ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <Card className={cn("gradient-orange text-white", className)}>
      <CardHeader>
        <CardTitle className="ac-title font-semibold text-2xl flex flex-col">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-4 flex flex-col ac-content">
        {children}
      </CardContent>
    </Card>
  );
};
