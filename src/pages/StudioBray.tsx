import StudioPage from "@/components/StudioPage";
import balanceLogo from "@/assets/balance-removebg-preview.png";

const StudioBray = () => {
  const studioInfo = {
    name: "Bray",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription:
      "Whether you're a beginner or an experienced practitioner, balance Bray has the perfect class for you.",
    detailDescription:
      "Located in the IDA Business Park on Southern Cross Road, our purpose-built studio features state-of-the-art reformers offering the ultimate Pilates experience. Serving Bray, Wicklow and surrounding areas, we're ready to welcome you.",
    address:
      "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
    image: balanceLogo,
    locationId: "117426",
    showScheduleWidget: true,
    isLogoHero: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioBray;
