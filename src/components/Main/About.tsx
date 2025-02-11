import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section className="py-16 bg-slate-100 text-gray-800 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide mb-4 intersect-once intersect:motion-preset-slide-up motion-delay-0">
            Tentang Kami
          </h2>
          <p className="text-justify md:text-lg leading-relaxed mb-6 intersect-once intersect:motion-preset-slide-up motion-delay-75">
            Dynasty Basketball Academy (DBA) adalah akademi bola basket yang berdiri pada 2 Oktober
            2022 di Kabupaten Karawang. Kami berfokus pada pembinaan atlet muda dari Kelompok Usia
            10 hingga Kelompok Usia 18, dengan metode latihan yang terstruktur, menyenangkan, dan
            tepat sasaran.
          </p>
          <Link
            href="/about"
            className="rounded-xl border border-yellow-500 px-4 py-2 bg-yellow-500 intersect-once intersect:motion-preset-slide-up motion-delay-100"
          >
            Load More
          </Link>
        </div>
        <div className="hidden md:flex justify-center intersect-once intersect:motion-preset-slide-up motion-delay-200">
          <Image src="/dynasty-logo.webp" width={250} height={250} alt="Logo Dynasty" />
        </div>
      </div>
    </section>
  );
};
