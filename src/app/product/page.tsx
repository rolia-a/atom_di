import ProductHeader from "@/components/product/ProductHeader";
import ProductHero from "@/components/product/ProductHero";
import ProductIntro from "@/components/product/ProductIntro";
import ProductCommunities from "@/components/product/ProductCommunities";
import ProductAdvantages from "@/components/product/ProductAdvantages";
import ProductBanner from "@/components/product/ProductBanner";
import ProductUnderHood from "@/components/product/ProductUnderHood";
import ProductGarage from "@/components/product/ProductGarage";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductReviews from "@/components/product/ProductReviews";
import ProductCharging from "@/components/product/ProductCharging";
import ProductPreorder from "@/components/product/ProductPreorder";
import ProductAfter from "@/components/product/ProductAfter";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductFooter from "@/components/product/ProductFooter";

export const metadata = {
  title: "Атом — электромобиль-гаджет",
  description:
    "Компактный и маневренный электромобиль-гаджет с просторным салоном и распашными дверями без центральных стоек.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHeader />
      <main className="flex-1">
        <ProductHero />
        <ProductIntro />
        <ProductCommunities />
        <ProductAdvantages />
        <ProductBanner />
        <ProductUnderHood />
        <ProductGarage />
        <ProductSpecs />
        <ProductReviews />
        <ProductCharging />
        <ProductPreorder />
        <ProductAfter />
        <ProductFAQ />
      </main>
      <ProductFooter />
    </>
  );
}
