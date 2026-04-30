import StudioPage from "@/components/StudioPage";
import limerickHero from "@/assets/balance-removebg-preview.png";

const Limerick = () => {
  const studioInfo = {
    name: "Limerick",
    slug: "limerick",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance Limerick has the perfect class for you.",
    detailDescription: "Discover our beautifully designed studio at The Coach House, Henry Street — featuring state-of-the-art reformers and offering the ultimate Pilates experience in the heart of Limerick city.",
    address: "The Coach House, Henry Street, Limerick, Ireland",
    image: limerickHero,
    locationId: "127771",
    showScheduleWidget: true,
    isLogoHero: true,
  };

  return <StudioPage studioInfo={studioInfo} />;
};

export default Limerick;
