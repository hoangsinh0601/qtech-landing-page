"use client";

import { navItems } from "@/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  const pathname = usePathname();
  const [hasHash, setHasHash] = useState(false);

  const handleNavClick = (item: any) => {
    if (item.link.includes("#")) {
      setHasHash(true);
    } else {
      setHasHash(false);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      setHasHash(!!window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <main
      className={`relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${
        hasHash ? "pt-[250px] pb-[-250px]" : ""
      }`}
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} onNavClick={handleNavClick} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
