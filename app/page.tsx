import { TitleSection } from "@/components";
import AccueilSection from "@/components/section/Accueil_Section";

export default function Page() {
  return (
    <main>
      <AccueilSection />
      <TitleSection />
      <AccueilSection />
    </main>
  )
}