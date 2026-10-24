import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import membersPhoto from "@/assets/clients-laughing.jpg";
import { communityEvents, eventDate } from "@/lib/communityEvents";

export default function MembershipAndEvents() {
  return <>
    <section className="py-10 md:py-16 bg-background">
      <div className="container px-4 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <img src={membersPhoto} alt="Clients sharing a laugh at balance studios" loading="lazy" width={1200} height={900} className="w-full aspect-[4/3] object-cover rounded-md" />
        <div><p className="text-xs uppercase mb-4">Good things come with membership</p><h2 className="text-3xl md:text-5xl leading-tight">A little more balance.<br />A lot more benefits<span className="text-sage">.</span></h2>
          <p className="mt-6 flex items-center gap-3 font-semibold"><RotateCcw className="text-sage-deep shrink-0" />Carry one unused class into next month.</p>
          <p className="mt-3 leading-relaxed">For limited monthly members. Plus short Mat classes at home, early pop-up booking, 15% off pop-ups and little thank-you surprises.</p>
          <Button asChild variant="sage" className="mt-6"><a href="/pricing#memberships">Find your membership <ArrowRight /></a></Button>
        </div>
      </div>
    </section>
    <section className="py-10 md:py-16 border-t border-border bg-background">
      <div className="container px-4 md:px-8"><div className="flex flex-wrap justify-between gap-5 items-end"><div><p className="text-xs uppercase mb-3">In good company</p><h2 className="text-3xl md:text-4xl">Something a little different<span className="text-sage">.</span></h2></div><Button asChild variant="quiet"><a href="/events">All upcoming events <ArrowRight /></a></Button></div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">{communityEvents.slice(0,3).map(event => <a key={event.name} href="/events" className="block py-5 border-t border-border"><p className="text-sm mb-3">{eventDate(event.date)}</p><h3 className="text-2xl mb-3">{event.name}</h3><p className="text-sm">{event.locations.length === 6 ? "All six studios" : event.locations.join(" · ")}</p></a>)}</div>
      </div>
    </section>
  </>;
}
