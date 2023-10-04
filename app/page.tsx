import { Competences, Expertises, TitleSection } from "@/components";
import AccueilSection from "@/components/section/Accueil_Section";


export default function Page() {

  return (
    <main className="flex flex-col gap-64">
      <AccueilSection />
      <TitleSection title='COMPETENCES' yBegin={766} yEnd={-100} />
      <Competences />
      <TitleSection title='EXPERTISES' yBegin={-1211} yEnd={-2077} />
      <Expertises />
    </main>

  )
}