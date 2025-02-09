import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { classes } from "@/utils/Class";

const Information = () => {
  return (
    <section id="program" className="bg-gradient-to-b from-yellow-400 to-yellow-500 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Program Kami</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Bergabunglah dengan Dynasty Basketball Academy, komunitas dinamis di mana setiap anak
            menemukan potensinya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {classes.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition duration-300 group-hover:translate-y-0">
                    <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 p-6 bg-white rounded-2xl shadow-xl">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
              Mengapa Harus Dynasty?
            </h3>
            <div className="space-y-4">
              {[
                "Coach dengan pengalaman bertahun-tahun",
                "Kurikulum sesuai usia untuk perkembangan optimal",
                "Lingkungan belajar yang aman dan mendukung",
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-yellow-500" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            <Link
              href="https://wa.me/6281382367257?text=Halo%20min!%20Saya%20tertarik%20mencoba%20free%20trial%20kelas%20Dynasty%20nih!!"
              target="_blank"
            >
              <button className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
                Schedule a Free Trial Class
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
