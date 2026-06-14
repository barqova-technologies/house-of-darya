import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="label text-gold">{eyebrow}</p>
      <h2 className="display mt-4 text-3xl text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-[0.95rem] leading-7 text-mist">{intro}</p>}
    </Reveal>
  );
}
