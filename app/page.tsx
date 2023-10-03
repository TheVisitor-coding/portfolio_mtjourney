import { Competences, TitleSection } from "@/components";
import AccueilSection from "@/components/section/Accueil_Section";

export default function Page() {
  return (
    <main className="flex flex-col gap-64">
      <AccueilSection />
      <TitleSection title='COMPETENCES' />
      <Competences />
      <TitleSection title='EXPERTISES' />
    </main>
  )
}