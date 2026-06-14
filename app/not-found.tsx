import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col items-center justify-center pb-24 pt-32 text-center">
      <p className="label text-gold">Page Not Found</p>
      <h1 className="display mt-5 max-w-xl text-4xl text-ink sm:text-5xl">
        This piece does not exist, <em className="italic text-gold">yet</em>
      </h1>
      <p className="mt-5 max-w-md text-sm leading-6 text-mist">
        The page you are looking for has moved or was never made. Like everything at House of
        Darya, perhaps it is waiting to be commissioned.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="btn-gold">
          Return Home
        </Link>
        <Link href="/collections" className="btn-line">
          Explore Collections
        </Link>
      </div>
    </section>
  );
}
