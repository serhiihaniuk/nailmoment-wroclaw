import { cn } from "@/lib/utils";

type ImageCaptionProps = {
  caption: string;
  url: string;
  className?: string;
};

export function ImageCaption({ caption, className, url }: ImageCaptionProps) {
  return (
    <div className={cn("flex flex-col gap-4 text-text-primary", className)}>
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={url}
          alt=""
          aria-hidden="true"
          className="h-auto w-full object-cover object-center"
        />
      </div>
      <p className="mx-auto max-w-[30ch] text-center text-base font-medium leading-7 md:text-lg">
        {caption}
      </p>
    </div>
  );
}
