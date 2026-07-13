import type { Metadata } from "next";
import { Customizer } from "@/components/Customizer";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Customise Your Jewellery - A Guided Design Journey",
  description:
    "Design your made-to-order piece: choose IGI certified natural or lab-grown diamonds or gemstones, your metal and karat, carat weight, colour and clarity, with hidden birthstones and inscriptions. Indicative pricing, confirmed at consultation.",
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
      <section className="shell pb-5 pt-24 text-center lg:pb-6">
        <p className="label text-gold">The Design Journey</p>
        <h1 className="display mt-2 text-2xl text-ink sm:text-3xl">
          {product ? `Make the ${product.name} entirely yours` : "Design a piece for no one else"}
        </h1>
      </section>
      <section className="shell pb-24 lg:pb-32">
        <Customizer product={product} />
      </section>
    </>
  );
}
