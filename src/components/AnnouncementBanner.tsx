import { Smartphone } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#A3C1AD] via-[#b8d4c3] to-[#A3C1AD] text-black py-2 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Smartphone className="w-4 h-4" />
        <span>Our Android App Is Coming Soon!</span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;

