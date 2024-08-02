import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import Footer from "@/components/Footer/Footer";


export default function Main() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Socials />
    </main>
  );
}
