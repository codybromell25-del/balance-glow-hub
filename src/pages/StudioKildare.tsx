import StudioPage from "@/components/StudioPage";
import balanceLogo from "@/assets/balancestudioheader.png";

const StudioKildare = () => {
  const studioInfo = {
    name: "Kildare Town",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance Kildare Town has the perfect class for you.",
    detailDescription: "Located in the heart of Claregate Street, our purpose-built studio features state-of-the-art reformers offering the ultimate Pilates experience. With easy access from surrounding areas, we're ready to welcome you.",
    address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
    image: balanceLogo,
    locationId: "117423",
    showScheduleWidget: true,
    isLogoHero: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioKildare;
