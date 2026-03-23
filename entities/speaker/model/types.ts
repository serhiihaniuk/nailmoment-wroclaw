import { ReactNode } from "react";

export type SpeakerProfile = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: ReactNode;
};
