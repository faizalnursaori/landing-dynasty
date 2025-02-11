import Image from "next/image";

interface AboutTeamCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  role: string;
}

export const AboutTeamCard: React.FC<AboutTeamCardProps> = ({ imageSrc, altText, name, role }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};
