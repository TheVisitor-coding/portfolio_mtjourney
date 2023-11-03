import { Competences, Contact, Expertises, Process, Project, TitleSection, Transi_Process } from "@/components";
import AccueilSection from "@/components/section/Accueil_Section";


export default function Page() {

  return (
    <main className="flex flex-col gap-56 sm:gap-64">
      <AccueilSection />
      <TitleSection title='EXPERTISES' yBegin={-1211} yEnd={-2077} />
      <Expertises />
      <TitleSection title='COMPETENCES' yBegin={766} yEnd={-100} />
      <Competences />
      <TitleSection title='PROJETS' yBegin={-1211} yEnd={-2077} />
      <Project />
      <TitleSection title='PROCESS' yBegin={-1211} yEnd={-2077} />
      <Transi_Process />
      <Process />
      <TitleSection title='CONTACT' yBegin={-1211} yEnd={-2077} />
      <Contact />
    </main>

  )
}