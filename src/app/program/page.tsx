import { Users, Calendar, Trophy, Clock, Medal, Dumbbell, Target } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <section className="bg-yellow-500">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h1 className="text-4xl font-extrabold text-white text-center">Informasi DBA</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-gray-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Peserta Didik</h2>
            </div>
            <p className="text-lg text-gray-700">
              DBA memiliki <span className="font-bold text-gray-600">100++</span> peserta didik
              aktif.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-gray-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Kategori Kelas</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">Toddler Class</li>
              <li className="flex items-center gap-2">Hoops Class</li>
              <li className="flex items-center gap-2">Girls Class</li>
              <li className="flex items-center gap-2">Boys Class</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-gray-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Jadwal Latihan</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gray-600" />
                <span className="font-bold">Selasa & Kamis:</span>
                16.00 - 18.00, 18.00 - 20.00
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gray-600" />
                <span className="font-bold">Jumat:</span>
                16.00 - 18.00
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="text-gray-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Physical & Skill Test</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Physical Test:</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Strength (Push up & Sit up)",
                    "Flexibility",
                    "Agility",
                    "Speed",
                    "Vertical Jump",
                    "Beep Test",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Medal size={16} className="text-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Skill Test:</h3>
                <ul className="space-y-2 text-gray-700">
                  {["Lay up Shot", "Wall Pass", "Under Basket", "Dribbling Test"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Target size={16} className="text-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-gray-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Try Out</h2>
            </div>
            <p className="text-lg text-gray-700">Bersama Club Karawang / Luar Karawang.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg transform mt-4">
          <Link
            href="https://wa.me/6281299723763"
            target="_blank"
          >
            <button className="mt-6 w-full text-white font-semibold py-3 px-6 rounded-lg bg-yellow-500 transition duration-300 intersect-once intersect:motion-preset-slide-up motion-delay-200">
              Hubungi Kami untuk Informasi Lebih Lanjut
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default page;
