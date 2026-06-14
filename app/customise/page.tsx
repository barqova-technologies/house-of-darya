import type { Metadata } from "next";
import { Customizer } from "@/components/Customizer";
import { SectionHeading } from "@/components/SectionHeading";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Customise Your Jewellery - A Guided Design Journey",
  description:
    "Design your made-to-order piece: choose natural or lab-grown diamonds or gemstones, your metal, carat, setting and finish, with hidden birthstones and inscriptions. Indicative pricing, confirmed at consultation.",
};

export default async function CustomisePage({
  searchParams,
}: {
  searchParams: Promise<{ design?: string }>;
}) {
  const { design } = await searchParams;
  const product = design ? getProduct(design) : undefined;

  return (
    <>
      <section className="shell pb-16 pt-36 lg:pt-44">
        <SectionHeading
          eyebrow="The Design Journey"
          title={
            product
              ? `Make the ${product.name} entirely yours.`
              : "Seven decisions. One piece that exists for no one else."
          }
          intro={
            product
              ? `You are customising the ${product.name}: ${product.style.toLowerCase()}. The preview follows your metal as you choose; everything is confirmed in person, with the stones in front of you.`
              : "Move through each choice at your own pace. The preview and indicative range follow you. Nothing is final here; everything is confirmed in person, with the stones in front of you."
          }
        />
      </section>
      <section className="shell pb-24 lg:pb-32">
        <Customizer product={product} />
      </section>
    </>
  );
}
