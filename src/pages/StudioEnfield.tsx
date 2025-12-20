import StudioPage from "@/components/StudioPage";
import balanceLogo from "@/assets/balancestudioheader.png";

const StudioEnfield = () => {
  const studioInfo = {
    name: "Enfield",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance Enfield has the perfect class for you.",
    detailDescription: "Located on Main Street in the heart of Enfield, our purpose-built studio features state-of-the-art reformers offering the ultimate Pilates experience. Serving Meath and surrounding areas, we're ready to welcome you.",
    address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
    image: balanceLogo,
    locationId: "117425",
    showScheduleWidget: true,
    isLogoHero: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioEnfield;
