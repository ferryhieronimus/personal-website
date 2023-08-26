import Navbar from "@/app/components/molecules/navbar";
import HeroSection from "@/app/components/organisms/hero-section";
import AboutSection from "@/app/components/organisms/about-section";
import ExpSection from "@/app/components/organisms/exp-section";
import ProjectsSection from "@/app/components/organisms/projects-section";
import Footer from "@/app/components/molecules/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center'>
        <HeroSection />
        <div id='wrapper' className='w-full z-20'>
          <AboutSection />
          <ExpSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
