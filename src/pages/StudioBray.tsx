import StudioPage from "@/components/StudioPage";
import studioBray from "@/assets/studio-bray.png";

const StudioBray = () => {
  const studioInfo = {
    name: "Bray",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Bray has the perfect class for you.",
    detailDescription: "Located in the IDA Business Park on Southern Cross Road, our purpose-built studio features state-of-the-art reformers offering the ultimate boutique experience. Serving Bray, Wicklow and surrounding areas, we're ready to welcome you.",
    address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
    image: studioBray,
    locationId: "117426",
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default StudioBray;
