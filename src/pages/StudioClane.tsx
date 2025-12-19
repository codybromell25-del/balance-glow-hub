import StudioPage from "@/components/StudioPage";
import studioClane from "@/assets/studio-clane.png";

const StudioClane = () => {
  const studioInfo = {
    name: "Clane",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Clane has the perfect class for you.",
    detailDescription: "Discover our purpose-built studio in the heart of Clane, featuring state-of-the-art reformers, offering the ultimate boutique experience. Just a short drive from surrounding areas, our studio sits proudly in Yew Tree Square, ready to welcome you.",
    address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642",
    image: studioClane,
    locationId: "117422",
    showScheduleWidget: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioClane;
