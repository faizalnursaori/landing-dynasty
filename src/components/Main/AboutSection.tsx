import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-3/4">
        <div className="w-full relative md:rounded-lg overflow-hidden md:mr-8 mb-8 md:mb-0">
          <Image
            src="/dynasty-member.jpg"
            alt="All of Dynasty"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full space-y-4">
          <p className="text-xl text-gray-700 tracking-wider">Tentang Kami</p>
          <h1 className="text-3xl text-gray-800 font-bold mb-4">Dynasty Basketball</h1>
          <div className="text-justify">
            <p className="text-gray-700 leading-relaxed max-w-xl">
              Dynasty Basketball Academy (DBA) adalah akademi bola basket yang didirikan pada 2
              Oktober 2022 di Kabupaten Karawang, dengan misi membina dan mengembangkan potensi
              atlet muda sejak dini. Kami berfokus pada pembinaan olahraga basket untuk kelompok
              usia 10 hingga 18 tahun (KU 10 - KU 18), dengan metode latihan yang terarah,
              berjenjang, dan menyenangkan.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed max-w-xl">
              Lebih dari sekadar akademi olahraga, DBA berkomitmen menciptakan lingkungan yang
              inspiratif bagi para peserta didik untuk berkembang, tidak hanya dalam keterampilan
              teknis basket, tetapi juga dalam membangun karakter yang tangguh. Program latihan kami
              dirancang untuk mengasah teknik individu, strategi permainan, serta meningkatkan fisik
              dan mental atlet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
