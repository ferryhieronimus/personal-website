import About from "@/components/banner/About";
import Education from "@/components/banner/Education";
import Experience from "@/components/banner/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/shared/Header";
import Projects from "@/components/banner/Projects";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center'>
        <Intro />
        <div id='wrapper' className='w-full z-20'>
          <About />
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
