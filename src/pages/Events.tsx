import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import photo from "@/assets/limerick-interior-hero.jpg.asset.json";
import { publishedEvents, eventDate, eventTime, eventLocations } from "@/lib/communityEvents";
export default function Events() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All events"], ["pop-up", "Pop-ups"], ["holiday", "Bring someone"]];
  const showFilters = new Set(publishedEvents.map(e => e.category)).size > 1;
  const visible = publishedEvents.filter(e => filter === "all" || e.category === filter);
  return <div className="bg-background text-foreground"><SEO title="Events & Pop-ups | balance studios" description="Good company, feel-good Reformer and a few extras. Explore balance pop-ups and holiday bring-a-guest classes." canonical="/events" /><Navigation /><main className="container px-4 md:px-8 py-10 md:py-16 pb-28 md:pb-16">
    <p className="text-xs mb-4">balance studios · In good company</p><h1 className="text-4xl md:text-6xl leading-tight">Good things, together<span className="text-sage">.</span></h1><p className="max-w-2xl mt-6 text-lg">Something a little different at balance. Join us for good company, a great class and a few extras.</p><img src={photo} alt="The reformer room at balance Limerick, with rows of reformers and the balance logo on the wall" className="w-full h-56 md:h-80 object-cover object-[50%_42%] rounded-md my-8" />
    <div className="grid md:grid-cols-2 gap-8 border-y border-border py-7 mb-8"><div><h2 className="text-2xl mb-3">Pop-up classes</h2><p>€24 per person. Members save 15% — €20.40.</p></div><div><h2 className="text-2xl mb-3">Bring someone</h2><p>Enjoy a mixed-level Reformer class together for €24, with your guest joining free. Available at all six studios during the holidays. The member pop-up discount does not apply.</p></div></div>
    {showFilters && <div role="group" aria-label="Filter events" className="flex flex-wrap gap-2 mb-8">{filters.map(([key,label]) => <Button key={key} variant={filter === key ? "sage" : "quiet"} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</Button>)}</div>}
    <div className="divide-y divide-border">{visible.map(e => <article key={e.name} className="grid md:grid-cols-[160px_1fr_190px] gap-6 py-8"><div><time dateTime={e.date} className="font-semibold">{eventDate(e.date)}</time><p className="text-xs mt-2">{eventTime(e)}</p></div><div><h2 className="text-2xl md:text-3xl mb-3">{e.name}</h2><p className="text-sm mb-4">{eventLocations(e)}</p><p className="leading-relaxed max-w-2xl">{e.description}</p></div><div><p className="font-semibold">{e.category === "treat" ? "Usual pass or membership" : e.category === "holiday" ? "€24 · one guest free" : "€24 per person"}</p>{e.category === "pop-up" && <p className="text-sm mt-2">Members: €20.40</p>}{e.bookingLink ? <Button asChild variant="sage" className="mt-4"><a href={e.bookingLink} target="_blank" rel="noopener noreferrer">Book now</a></Button> : <p className="text-sm mt-4">Available to purchase soon</p>}</div></article>)}</div>
    <div className="border-t border-border pt-8 mt-4"><h2 className="text-2xl md:text-3xl">More coming soon<span className="text-sage">.</span></h2><p className="text-sm mt-3 max-w-2xl">Check back soon for more events at balance.</p></div>
    <p className="pt-8 text-lg max-w-3xl">A little thank-you to our community, and a warm welcome to someone you care about. It's all about balance.</p>
  </main><Footer /></div>;
}
