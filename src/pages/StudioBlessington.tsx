import StudioPage from "@/components/StudioPage";
import balanceLogo from "@/assets/balance-removebg-preview.png";

const StudioBlessington = () => {
  const studioInfo = {
    name: "Blessington",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance Blessington has the perfect class for you.",
    detailDescription: "Nestled on The Green in the heart of Main Street, our purpose-built studio features state-of-the-art reformers offering the ultimate Pilates experience. Just a short drive from Wicklow and surrounding areas, we're ready to welcome you.",
    address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
    image: balanceLogo,
    locationId: "117424",
    showScheduleWidget: true,
    isLogoHero: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioBlessington;
