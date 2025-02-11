export const VisionMission = () => {
  return (
    <section id="vision" className="py-16 bg-gray-200 min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 tracking-wide intersect-once intersect:motion-preset-slide-up motion-delay-0">
          Visi & Misi
        </h2>
        <p className="text-lg text-gray-600 mt-2 intersect-once intersect:motion-preset-slide-up motion-delay-50">
          Prinsip dan Komitmen Kami
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto px-6">
        <div className="p-6 rounded-2xl border border-gray-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 intersect-once intersect:motion-preset-slide-up motion-delay-100">
            Visi
          </h3>
          <p className="text-gray-600 leading-relaxed intersect-once intersect:motion-preset-slide-up motion-delay-125">
            Dynasty Basketball Academy dikelola secara profesional, mengutamakan kekeluargaan atau
            rasa solidaritas, serta dapat menghasilkan peserta didik yang unggul dan berkarakter
            baik
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-gray-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 intersect-once intersect:motion-preset-slide-up motion-delay-150">
            Misi
          </h3>
          <span className="text-gray-600 leading-relaxed">
            <ul className="list-disc list-inside">
              <li className="intersect-once intersect:motion-preset-slide-up motion-delay-180">
                Meningkatkan kualitas dan kemampuan peserta didik melalui program latihan yang tepat
                sasaran dan berjenjang.
              </li>
              <li className="intersect-once intersect:motion-preset-slide-up motion-delay-190">
                Membentuk sikap kedisiplinan, tekun, kerja keras, bertanggung jawab, dan percaya
                diri.
              </li>
              <li className="intersect-once intersect:motion-preset-slide-up motion-delay-200">
                Membentuk manajemen organisasi yang baik dengan pengelolaan operasional, keuangan,
                dan administrasi yang sistematis.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
};
