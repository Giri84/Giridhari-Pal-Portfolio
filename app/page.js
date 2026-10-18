import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceLog from "@/components/ExperienceLog";
import StackPanel from "@/components/StackPanel";
import ProjectGrid from "@/components/ProjectGrid";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ExperienceLog />
        <StackPanel />
        <ProjectGrid />
        <Achievements />
        <Education />
        <Contact />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
