import StudioPage from "@/components/StudioPage";
import studioClane from "@/assets/studio-clane.png";

const StudioClane = () => {
  const studioInfo = {
    name: "Clane",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Clane has the perfect class for you.",
    detailDescription: "Discover our purpose-built studio in the heart of Clane, featuring state-of-the-art reformers, offering the ultimate boutique experience. Just a short drive from surrounding areas, our studio sits proudly in Yew Tree Square, ready to welcome you.",
    address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
    image: studioClane,
  };

  const scheduleWidget = {
    hostId: "62930",
    locationIds: "[117422]",
  };

  return <StudioPage studioInfo={studioInfo} scheduleWidget={scheduleWidget} />;
};

export default StudioClane;
