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
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

import LoadingScreen from "@/components/ui/LoadingScreen";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const pathname = usePathname();
  const [hasHash, setHasHash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const handleNavClick = (item: any) => {
  //   if (item.link.includes("#")) {
  //     setTimeout(() => {
  //       setHasHash(true);
  //     }, 500);
  //   } else {
  //     setTimeout(() => {
  //       setHasHash(false);
  //     }, 500);
  //   }
  // };

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setHasHash(!!window.location.hash);
  //   };

  //   handleHashChange();
  //   window.addEventListener("hashchange", handleHashChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, [pathname]);

  return (
    <main
      className={`relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${
        hasHash ? "pt-[250px] pb-[-250px]" : ""
      }`}
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>

      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} onNavClick={handleNavClick} /> */}
        <Hero onLoadComplete={() => setIsLoading(false)} />
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
