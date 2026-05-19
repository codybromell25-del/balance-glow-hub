import StudioPage from "@/components/StudioPage";
import brayHero from "@/assets/studio-bray.jpg";

const StudioBray = () => {
  const studioInfo = {
    name: "Bray",
    slug: "bray",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription:
      "Whether you're a beginner or an experienced practitioner, balance Bray has the perfect class for you.",
    detailDescription:
      "Located in the IDA Business Park on Southern Cross Road, our purpose-built studio features state-of-the-art reformers offering the ultimate Pilates experience. Serving Bray, Wicklow and surrounding areas, we're ready to welcome you.",
    address:
      "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
    image: brayHero,
    locationId: "117426",
    showScheduleWidget: true,
    isLogoHero: false,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioBray;
