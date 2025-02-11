import Image from "next/image";

export const Benefit = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">Benefit dan Fasilitas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: "/benefit-1.png", alt: "Benefit 1", text: "Jersey Training" },
            { src: "/benefit-3.png", alt: "Benefit 3", text: "Latihan di lapangan Indoor" },
            { src: "/benefit-2.png", alt: "Benefit 2", text: "Pelatih profesional berlisensi" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="flex justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
