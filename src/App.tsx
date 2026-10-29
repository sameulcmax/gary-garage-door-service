import { useEffect, useRef } from "react";
import { useRoute, useScrollReset } from "@/lib/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import GarageDoors from "@/pages/GarageDoors";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

function Page({ path }: { path: string }) {
  if (path === "/") return <Home />;
  if (path === "/about") return <About />;
  if (path === "/services") return <Services />;
  if (path.startsWith("/services/")) {
    return <ServiceDetail slug={path.replace("/services/", "")} />;
  }
  if (path === "/garage-doors") return <GarageDoors />;
  if (path === "/faq") return <FAQ />;
  if (path === "/contact") return <Contact />;
  if (path === "/privacy") return <Privacy />;
  return <NotFound />;
}

export default function App() {
  const path = useRoute();
  const firstRender = useRef(true);
  const mainRef = useRef<HTMLElement>(null);

  useScrollReset(path);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [path]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView({ block: "start" });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-[3px] focus:bg-navy focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
        <Page path={path} />
      </main>
      <Footer />
      <MobileActionBar />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
