import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-y-6">
      <Image src="/images/png/404.png" width={200} height={200} alt="404" />
      <p>
        Go back to{" "}
        <Link href="/" className="text-azure-100 underline underline-offset-2">
          Home
        </Link>
      </p>
    </section>
  );
}
