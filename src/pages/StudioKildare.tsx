import StudioPage from "@/components/StudioPage";
import studioKildare from "@/assets/studio-kildare.png";

const StudioKildare = () => {
  const studioInfo = {
    name: "Kildare Town",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Kildare Town has the perfect class for you.",
    detailDescription: "Located in the heart of Claregate Street, our purpose-built studio features state-of-the-art reformers offering the ultimate boutique experience. With easy access from surrounding areas, we're ready to welcome you.",
    address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
    image: studioKildare,
    locationId: "117423",
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioKildare;
