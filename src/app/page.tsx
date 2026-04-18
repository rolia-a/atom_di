import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Stats from "@/components/Stats";
import NeverBoring from "@/components/NeverBoring";
import Quote from "@/components/Quote";
import Formats from "@/components/Formats";
import Timeline from "@/components/Timeline";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Countdown />
        <Stats />
        <NeverBoring />
        <Quote />
        <Formats />
        <Timeline />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
