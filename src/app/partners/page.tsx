import PartnersHeader from "@/components/partners/PartnersHeader";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersCountdown from "@/components/partners/PartnersCountdown";
import PartnersEvents from "@/components/partners/PartnersEvents";
import PartnersStats from "@/components/partners/PartnersStats";
import PartnersFormats from "@/components/partners/PartnersFormats";
import PartnersCommunity from "@/components/partners/PartnersCommunity";
import PartnersTimeline from "@/components/partners/PartnersTimeline";
import PartnersQuote from "@/components/partners/PartnersQuote";
import PartnersReasons from "@/components/partners/PartnersReasons";
import PartnersApply from "@/components/partners/PartnersApply";
import PartnersFooter from "@/components/partners/PartnersFooter";

export const metadata = {
  title: "Атом — партнёрская программа",
  description:
    "Первый серийный электромобиль страны ищет сообщества, с которыми хочется делать историю.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHeader />
      <main className="flex-1">
        <PartnersHero />
        <PartnersCountdown />
        <PartnersEvents />
        <PartnersStats />
        <PartnersFormats />
        <PartnersCommunity />
        <PartnersTimeline />
        <PartnersQuote />
        <PartnersReasons />
        <PartnersApply />
      </main>
      <PartnersFooter />
    </>
  );
}
