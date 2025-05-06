import { Section } from "@/blocks/ui/section";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { FooterInfoSection } from "@/features/footer-info-section";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";
import { StepBack } from "lucide-react";
import Link from "next/link"; // Import Link for the back button

export default function Polityka() {
  return (
    // Main container from the new project
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden mx-auto bg-blue-background grow min-h-[100dvh] flex flex-col">
      {/* Section containing decorative images and logo (from new project) */}
      <Section className="flex flex-col relative items-center justify-start pt-44 pb-10">
        <DecorativeImage
          src={IMAGES.ORANGES_URL}
          className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
        />
        <DecorativeImage
          src={IMAGES.LEMONS_URL}
          className="-right-8 md:-right-2 -top-8 size-[180px]"
        />
        <span className="flex w-[358px] h-[117px] gap-3.5 flex-col items-center justify-center mb-10">
          <NailIcon />
          <span className="relative block">
            <MomentIcon />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[67px] top-[-12px] size-[62px] object-cover inline-block"
            />
          </span>
        </span>
      </Section>

      {/* Section for the Privacy Policy Content */}
      <Section className="px-6 md:px-10 lg:px-16 pb-16 grow">
        {" "}
        {/* Added padding and grow */}
        {/* Heading styled for the new theme */}
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-foreground text-center mb-8 pb-4 border-b border-white/30">
          Polityka prywatności
        </h1>
        {/* Content container with spacing and text styling for the new theme */}
        <div className="space-y-5 text-blue-foreground/90 text-base leading-relaxed">
          {/* Paragraphs copied from the old project */}
          <p>
            Zapewniamy naszym Klientom pełne poszanowanie ich prywatności oraz
            ochronę ich danych osobowych.
          </p>
          <p>
            Dane osobowe przekazywane nam przez Klientów przetwarzamy w sposób
            zgodny z zakresem udzielonego przez Klientów zezwolenia oraz
            wymogami prawa, w szczególności zgodnie z ustawą z dnia 29 sierpnia
            1997 r. o ochronie danych osobowych (Dz. U. Nr 133, poz. 883 z późn.
            zm.). Dane osobowe Klientów przechowujemy na serwerach
            zapewniających ich pełne bezpieczeństwo. Dostęp do bazy danych
            posiadają jedynie uprawnieni osoby pracujący z Serwisem.
          </p>
          <p>
            Każdy Klient, który przekazał nam swoje dane osobowe ma pełną
            możliwość dostępu do swoich danych w celu ich weryfikacji,
            modyfikacji lub też żądania usunięcia.
          </p>
          <p>
            Serwis nie przekazuje, nie sprzedaje ani nie użycza zgromadzonych
            danych osobowych Klientów osobom trzecim, chyba że dzieje się to za
            wyraźną zgodą lub na życzenie Klienta albo na żądanie uprawnionych
            na podstawie prawa organów państwa w związku z toczącymi się
            postępowaniami.
          </p>
          <p>
            Serwis posługuje się również tzw. plikami cookies (ciasteczka).
            Pliki te są zapisywane na komputerze Klienta przez nasz serwer i
            dostarczają danych statystycznych o aktywności Klienta, w celu
            dobrania naszej oferty do jego indywidualnych potrzeb i gustów.
            Klient w każdej chwili może wyłączyć w swojej przeglądarce
            internetowej opcję przyjmowania cookies, choć musi mieć świadomość,
            że w niektórych przypadkach odłączenie tych plików może wpłynąć na
            utrudnienia w korzystaniu z oferty naszego Serwisu.
          </p>
          <p>
            Pliki cookies zapisywane na komputerze Klienta przechowują
            informacje na temat: sesji Użytkownika, ostatnio oglądanych
            produktów, oddania głosu w ankiecie.
          </p>
          <p>
            Pragniemy zwrócić Państwa uwagę, że jeżeli na stronie internetowej
            naszego Serwisu zamieszczamy linki prowadzące do innych,
            nieadministrowanych przez nas stron internetowych, to nie możemy
            odpowiadać ani za zawartość tychże stron, ani za stopień ochrony
            prywatności realizowany przez administratorów tych stron. Podejmując
            decyzję o przejściu na takie strony, Klient czyni to na własną
            odpowiedzialność. Zachęcamy przy okazji do zapoznania się z polityką
            prywatności realizowaną przez te strony, zanim Klient udostępni im
            swoje dane osobowe.
          </p>
          <p>
            Materiały reklamowo – promocyjne wysyłamy Klientom jedynie wówczas,
            gdy wyrazili na to zgodę. Dotyczy to w szczególności newslettera
            wysyłanego Klientowi, jeżeli potwierdzi wyraźnie wskazanego przez
            nas linka zawierającego akceptację na otrzymywanie newslettera o
            aktualnych promocjach, rabatach i nowościach w naszym Serwisie.
            Materiały te dotyczą wyłącznie oferty naszego Serwisu.
          </p>
        </div>
        <Button
          className="text-blue-foreground w-full max-w-80 mx-auto mt-10 flex gap-2 items-center"
          asChild
        >
          <Link href="/">
            <StepBack />
            Повернутися на головну сторінку
          </Link>
        </Button>
      </Section>
      <FooterInfoSection />
    </main>
  );
}
