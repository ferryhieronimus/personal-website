"use client";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleDrawer = () => setOpen(!open);

  useEffect(() => {
    let intro = document.getElementById("intro");
    let value = window.scrollY;

    const handleScroll = () => {
      window.innerWidth > 1024 &&
        (intro!.style.transform = `translateY(${value * 0.4}px)`);
    };

    const handleNavbar = () => {
      const currentScrollPos = window.scrollY;
      const visible = value > currentScrollPos;

      value = currentScrollPos;
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  const scrollIntoAbout = (id: string) => {
    const element = document.getElementById(id);
    const header = document.getElementById("header");

    if (window.innerWidth > 768) {
      scrollBy({
        top:
          element!.getBoundingClientRect().top -
          (element!.getBoundingClientRect().top < 0 ? header!.offsetHeight : 0),
      });
    } else {
      scrollBy({
        top:
          element!.getBoundingClientRect().top -
          (element!.getBoundingClientRect().top < 0 ? header!.offsetHeight : 0),
      });
      handleDrawer();
    }
  };

  return (
    <header
      className={clsx(
        "w-full flex justify-center transition-opacity duration-300 sticky z-50 top-0 bg-white/95 motion-reduce:transition-none font-poppins",
        { ["opacity-0"]: !visible && !open }
      )}
      id='header'
    >
      <div className='w-full h-16 max-w-6xl mx-8 md:mx-16 flex justify-between items-center'>
        <div
          onClick={() => window.scrollTo(0, 0)}
          className='cursor-pointer select-none'
        >
          <a>hrnmsy</a>
        </div>
        <nav className='gap-4 hidden md:flex cursor-pointer'>
          <a onClick={() => scrollIntoAbout("about")}>about</a>
          <a onClick={() => scrollIntoAbout("experience")}>experience</a>
          <a onClick={() => scrollIntoAbout("projects")}>projects</a>
          <a onClick={() => scrollIntoAbout("projects")}>contact</a>
        </nav>

        <div
          className='md:hidden aspect-square cursor-pointer'
          onClick={handleDrawer}
        >
          <FiMenu size={21} />
        </div>

        <div
          className={clsx(
            "flex flex-col fixed top-0 left-0 h-screen w-full bg-transparent transition-transform duration-300 z-10 motion-reduce:transition-none",
            { ["-translate-y-full"]: !open }
          )}
        >
          <nav className='w-full flex flex-col bg-white text-center p-8 drop-shadow-2xl'>
            <a className='py-4' onClick={() => scrollIntoAbout("about")}>
              about
            </a>
            <a className='py-4' onClick={() => scrollIntoAbout("experience")}>
              experience
            </a>
            <a className='py-4' onClick={() => scrollIntoAbout("projects")}>
              projects
            </a>
            <a className='py-4' onClick={() => scrollIntoAbout("projects")}>
              contact
            </a>
          </nav>
          <div className='h-2/3' onClick={handleDrawer}></div>
        </div>
        <div
          className={clsx(
            "absolute top-0 left-0 w-full h-screen transition-opacity duration-500 motion-reduce:transition-none motion-reduce:backdrop-filter-none",
            { ["opacity-0 -translate-x-full"]: !open },
            { ["opacity-100 backdrop-blur-sm"]: open }
          )}
        ></div>
      </div>
    </header>
  );
}
