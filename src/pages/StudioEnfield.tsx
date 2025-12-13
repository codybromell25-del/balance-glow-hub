import StudioPage from "@/components/StudioPage";
import studioEnfield from "@/assets/studio-enfield.png";

const StudioEnfield = () => {
  const studioInfo = {
    name: "Enfield",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Enfield has the perfect class for you.",
    detailDescription: "Located on Main Street in the heart of Enfield, our purpose-built studio features state-of-the-art reformers offering the ultimate boutique experience. Serving Meath and surrounding areas, we're ready to welcome you.",
    address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
    image: studioEnfield,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioEnfield;
