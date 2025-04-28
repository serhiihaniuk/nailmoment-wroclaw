import { FooterInfoSection } from "@/features/footer-info-section";
import { PeoplesSpeakerSection } from "@/features/peoples-speaker-section";

export default function Home() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden space-y-14 mx-auto bg-blue-background md:space-y-28 grow min-h-[100dvh] flex flex-col">
      <PeoplesSpeakerSection />
      <FooterInfoSection />
    </main>
  );
}
