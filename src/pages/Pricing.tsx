import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import MembershipSection from "@/components/membership/MembershipSection";
import reformerPhoto from "@/assets/studio-instructor-helping.jpg";
import matPhoto from "@/assets/clients-stretching.jpg";

type ClassType = "reformer" | "mat";
type PurchaseType = "memberships" | "packs" | "intro";

const reformerPacks = [
  { classes: 1, price: "€24", validity: "Valid 30 days from first class", link: "https://momence.com/balance/membership/Single-Reformer-Class/573997" },
  { classes: 3, price: "€65", validity: "Valid 30 days from first class", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
  { classes: 6, price: "€130", validity: "Valid 60 days from first class", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
  { classes: 10, price: "€215", validity: "Valid 310 days from first class", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992" },
  { classes: 20, price: "€400", validity: "Valid 610 days from first class", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
];
const matPacks = [
  { classes: 1, price: "€15", validity: "Valid 30 days from first class", link: "https://momence.com/m/573998" },
  { classes: 3, price: "€42", validity: "Valid 30 days from first class", link: "https://momence.com/m/771509" },
  { classes: 6, price: "€84", validity: "Valid 60 days from first class", link: "https://momence.com/m/771510" },
];

const Pricing = () => {
  const [classType, setClassType] = useState<ClassType>("reformer");
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("memberships");
  const isReformer = classType === "reformer";
  const packs = isReformer ? reformerPacks : matPacks;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Pricing & Memberships | balance studios - Reformer Pilates" description="Reformer Pilates class packs from €24 and memberships from €85. New here? 3 classes for €50, valid at all 6 balance studios." canonical="/pricing" />
      <Navigation />
      <main className="px-5 md:px-8">
        <header className="max-w-6xl mx-auto pt-12 md:pt-16 pb-8 md:pb-12 text-center">
          <p className="text-xs uppercase tracking-normal mb-5">A little more balance</p>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight tracking-normal text-balance">pricing & memberships<span className="text-sage">.</span></h1>
          <p className="max-w-xl mx-auto mt-5 text-sm md:text-base leading-relaxed">Your first class. Your weekly ritual. Your own kind of balance.</p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 pb-7">
            <div className="inline-flex max-w-full border border-foreground/20 p-1 rounded-md gap-1" role="group" aria-label="Class type">
              {([{ value: "reformer", label: "Reformer" }, { value: "mat", label: "Mat, Barre & Yoga" }] as const).map(option => (
                <Button key={option.value} variant={classType === option.value ? "sage" : "quiet"} aria-pressed={classType === option.value} onClick={() => setClassType(option.value)} className="font-body tracking-normal border-0 px-4 md:px-7 shadow-none">{option.label}</Button>
              ))}
            </div>
            <p className="flex items-center gap-2 text-xs md:text-sm"><MapPin className="w-3.5 h-3.5" />{isReformer ? "Reformer at all six studios" : "Mat, Barre & Yoga · Limerick & Kildare Town"}</p>
          </div>

          <div className="grid grid-cols-3 border-b border-foreground/20" role="tablist" aria-label="Pricing options">
            {([{ value: "memberships", label: "Monthly memberships" }, { value: "packs", label: "Class packs" }, { value: "intro", label: "New here?" }] as const).map(option => (
              <Button key={option.value} id={`tab-${option.value}`} role="tab" aria-selected={purchaseType === option.value} aria-controls="pricing-options" variant="quiet" onClick={() => setPurchaseType(option.value)} className={`h-auto min-h-14 py-3 px-2 rounded-none border-0 border-b-2 font-body tracking-normal text-xs md:text-sm whitespace-normal hover:bg-sage/10 ${purchaseType === option.value ? "border-sage bg-sage/10 font-semibold" : "border-transparent bg-transparent"}`}>{option.label}</Button>
            ))}
          </div>
          <div id="pricing-options" role="tabpanel" aria-labelledby={`tab-${purchaseType}`}>
            {purchaseType === "memberships" && <MembershipSection classType={classType} presentation="editorial" />}
            {purchaseType === "packs" && <section className="py-10 md:py-16">
              <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl">a little flexibility<span className="text-sage">.</span></h2>
                <p className="text-sm max-w-md leading-relaxed">{isReformer ? "Reformer class packs. Valid at all six studios." : "Pick & mix across Mat, Barre & Yoga in Limerick and Kildare Town."}</p>
              </div>
              <div className="border-t border-foreground/20">
                {packs.map(pack => <div key={pack.classes} className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1.4fr_auto_auto] gap-x-5 gap-y-3 items-center py-6 border-b border-foreground/20">
                  <h3 className="text-xl md:text-2xl">{pack.classes} {pack.classes === 1 ? "class" : "classes"}</h3>
                  <p className="text-xs md:text-sm row-start-2 md:row-auto">{pack.validity}</p>
                  <p className="font-heading not-italic text-3xl row-start-1 col-start-2 md:col-auto">{pack.price}</p>
                  <Button asChild variant="quiet" className="font-body tracking-normal row-start-2 md:row-auto col-start-2 md:col-auto"><a href={pack.link} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${pack.classes} ${isReformer ? "Reformer" : "Mat, Barre & Yoga"} class pack`}>Buy pack <ArrowRight /></a></Button>
                </div>)}
              </div>
            </section>}
            {purchaseType === "intro" && <section className="grid md:grid-cols-2 gap-8 md:gap-14 py-10 md:py-16 items-center">
              <img src={isReformer ? reformerPhoto : matPhoto} alt={isReformer ? "Instructor supporting clients in a Reformer Pilates class at balance studios" : "Clients stretching together in a balance Mat Pilates class"} className="w-full aspect-[4/3] object-cover rounded-md" loading="lazy" />
              <div>
                <p className="text-xs uppercase mb-4">First-time clients only</p>
                <h2 className="text-3xl md:text-4xl leading-tight">your first little balance<span className="text-sage">.</span></h2>
                <p className="font-heading not-italic text-4xl md:text-5xl mt-6">3 classes · {isReformer ? "€50" : "€40"}</p>
                <p className="mt-3 text-sm">{isReformer ? "Discover Reformer Pilates at any of our six studios." : "Pick & mix Mat, Barre & Yoga in Limerick and Kildare Town."}</p>
                <ul className="space-y-3 text-sm my-6">
                  {(isReformer ? ["Experience different instructors", "Visit any of our 6 studio locations", "Valid for 30 days from purchase", "First-time clients only"] : ["Mix any Mat, Barre or Yoga classes", "Experience different instructors & styles", "Valid for 30 days from your first class", "First-time clients only"]).map(feature => <li key={feature} className="flex items-start gap-3"><Check className="w-4 h-4 shrink-0 text-sage-deep mt-0.5" />{feature}</li>)}
                </ul>
                <Button asChild variant="sage" size="lg" className="font-body tracking-normal"><a href={isReformer ? "https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" : "https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466"} target="_blank" rel="noopener noreferrer">Get the intro offer <ArrowRight /></a></Button>
              </div>
            </section>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Pricing;
