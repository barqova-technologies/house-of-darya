import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label="House of Darya home" className="inline-flex shrink-0">
      <Image
        src="/logo.png"
        alt="House of Darya"
        width={370}
        height={165}
        priority
        className={className}
      />
    </Link>
  );
}
