import StudioPage from "@/components/StudioPage";
import studioBlessington from "@/assets/studio-blessington.png";

const StudioBlessington = () => {
  const studioInfo = {
    name: "Blessington",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Blessington has the perfect class for you.",
    detailDescription: "Nestled on The Green in the heart of Main Street, our purpose-built studio features state-of-the-art reformers offering the ultimate boutique experience. Just a short drive from Wicklow and surrounding areas, we're ready to welcome you.",
    address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
    image: studioBlessington,
    locationId: "117424",
    showScheduleWidget: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioBlessington;
