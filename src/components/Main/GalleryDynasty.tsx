import Image from "next/image";
import Marquee from "react-fast-marquee";

export const GalleryDynasty = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div>
        <Marquee gradient={false} speed={70} className="flex gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="p-2">
              <Image
                src={`/dynasty-square-${i + 1}.jpg`}
                alt="All of Dynasty"
                width={300}
                height={300}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
