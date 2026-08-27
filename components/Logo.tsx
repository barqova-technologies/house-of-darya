import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label="House of Darya home" className="inline-flex shrink-0">
      <Image
        src="/logo.png"
        alt="House of Darya"
        width={1600}
        height={578}
        priority
        className={className}
      />
    </Link>
  );
}
