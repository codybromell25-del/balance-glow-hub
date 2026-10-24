import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import photo from "@/assets/clients-laughing.jpg";
import { communityEvents, eventDate } from "@/lib/communityEvents";
export default function Events() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All events"], ["pop-up", "Pop-ups"], ["holiday", "Bring someone"], ["treat", "Studio treats"]];
  return <div className="bg-background text-foreground"><SEO title="Events & Pop-ups | balance studios" description="Good company, feel-good Reformer and a few extras. Explore balance pop-ups and holiday bring-a-guest classes." canonical="/events" /><Navigation /><main className="container px-4 md:px-8 py-10 md:py-16">
    <p className="uppercase text-xs mb-4">balance studios · In good company</p><h1 className="text-4xl md:text-6xl leading-tight">Good things, together<span className="text-sage">.</span></h1><p className="max-w-2xl mt-6 text-lg">Something a little different at balance. Join us for good company, a great class and a few extras.</p><img src={photo} alt="Clients sharing a laugh at balance studios" className="w-full h-56 md:h-80 object-cover object-[50%_40%] rounded-md my-8" />
    <div className="grid md:grid-cols-2 gap-8 border-y border-border py-7 mb-8"><div><h2 className="text-2xl mb-3">Pop-up classes</h2><p>€24 per person. Members save 15% — €20.40.</p></div><div><h2 className="text-2xl mb-3">Your class. Their first taste of balance.</h2><p>Holiday classes: €24 with one person free. Mixed-level Reformer at all six studios. The pop-up member discount does not apply.</p></div></div>
    <div role="group" aria-label="Filter events" className="flex flex-wrap gap-2 mb-8">{filters.map(([key,label]) => <Button key={key} variant={filter === key ? "sage" : "quiet"} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</Button>)}</div>
    {communityEvents.filter(e => filter === "all" || e.category === filter).map(e => <article key={e.name} className="grid md:grid-cols-[160px_1fr_190px] gap-6 py-8 border-t border-border"><div><time dateTime={e.date} className="font-semibold">{eventDate(e.date)}</time><p className="text-xs mt-2">Time to be confirmed</p></div><div><h2 className="text-2xl md:text-3xl mb-3">{e.name}</h2><p className="text-sm mb-4">{e.locations.length === 6 ? "All six studios" : e.locations.join(" · ")}</p><p className="leading-relaxed max-w-2xl">{e.description}</p></div><div><p className="font-semibold">{e.category === "treat" ? "Usual pass or membership" : e.category === "holiday" ? "€24 · one guest free" : "€24 per person"}</p>{e.category === "pop-up" && <p className="text-sm mt-2">Members: €20.40</p>}<p className="text-sm mt-4">Booking details coming soon</p></div></article>)}
    <p className="border-t border-border pt-8 mt-4 text-lg max-w-3xl">A little thank-you to our community, and a warm welcome to someone you care about. It's all about balance.</p>
  </main><Footer /></div>;
}
