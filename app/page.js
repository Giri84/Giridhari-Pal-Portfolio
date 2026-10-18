import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceLog from "@/components/ExperienceLog";
import StackPanel from "@/components/StackPanel";
import ProjectGrid from "@/components/ProjectGrid";
import Education from "@/components/Education";
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
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
