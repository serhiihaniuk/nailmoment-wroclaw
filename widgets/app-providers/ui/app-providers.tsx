import { ReactNode } from "react";
import { CookieConsentProvider } from "@/features/cookie-consent";
import { UtmTrackingProvider } from "@/features/utm-tracking";
import { ImageViewerProvider } from "@/shared/ui/image-viewer";
import { LenisProvider } from "@/shared/ui/lenis-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <UtmTrackingProvider>
      <CookieConsentProvider>
        <ImageViewerProvider>
          <LenisProvider>{children}</LenisProvider>
        </ImageViewerProvider>
      </CookieConsentProvider>
    </UtmTrackingProvider>
  );
}
