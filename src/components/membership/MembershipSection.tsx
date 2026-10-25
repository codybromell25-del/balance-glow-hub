import { ArrowRight, BookOpen, CalendarHeart, Gift, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { matMembershipPlans, reformerMembershipPlans, rolloverCopy } from "@/lib/membershipPlans";

export default function MembershipSection({ classType = "reformer" }: { classType?: "reformer" | "mat" }) {
  const plans = classType === "reformer" ? reformerMembershipPlans : matMembershipPlans;
  return <section id="memberships" className="py-10 md:py-16 bg-background scroll-mt-32">
    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
      <p className="text-xs uppercase tracking-normal mb-4">Monthly memberships · {classType === "reformer" ? "All six studios" : "Limerick & Kildare Town"}</p>
      <h2 className="font-heading text-3xl md:text-5xl leading-tight">More from your membership<span className="text-sage">.</span></h2>
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 mt-8 pb-10 border-b border-border">
        <div className="border-l-4 border-sage pl-5 md:pl-7">
          <RotateCcw className="w-7 h-7 mb-4 text-sage-deep" />
          <h3 className="text-2xl md:text-3xl mb-4">Life happens. Keep one class.</h3>
          <p className="leading-relaxed">{rolloverCopy}</p>
        </div>
        <div className="space-y-5">
          {[{ icon: BookOpen, title: "A little balance at home", copy: "Access our online library of short Mat Pilates classes." }, { icon: CalendarHeart, title: "First in, a little less", copy: "Early booking for pop-up classes, plus 15% off — €20.40 instead of €24." }, { icon: Gift, title: "More reasons to belong", copy: "Loyalty rewards and little thank-you surprises as you keep attending. Gifts and milestones to be confirmed." }].map(({ icon: Icon, title, copy }) => <div key={title} className="flex gap-4"><Icon className="w-5 h-5 shrink-0 text-sage-deep mt-1" /><div><p className="font-semibold mb-1">{title}</p><p className="text-sm leading-relaxed">{copy}</p></div></div>)}
        </div>
      </div>
      <div className={`grid gap-x-6 ${classType === "reformer" ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2"} mt-6`}>
        {plans.map(plan => <div key={plan.classes} className="py-6 border-b border-border flex flex-col">
          <h3 className="text-xl">{plan.classes === "Unlimited" ? "Unlimited" : `${plan.classes} classes`}</h3>
          <p className="mt-4 font-heading text-4xl">€{plan.price}</p><p className="text-sm mt-1">per month</p>
          <p className="text-sm mt-4 mb-4">{typeof plan.classes === "number" ? `€${(plan.price / plan.classes).toFixed(2)} per class` : "Make movement your rhythm"}</p>
          <p className="flex gap-2 items-center text-sm mb-5"><Check className="w-4 h-4 shrink-0 text-sage-deep" />{plan.classes === "Unlimited" ? "Unlimited Reformer classes" : "One-class rollover"}</p>
          {plan.link ? <Button asChild variant="sage" className="w-full mt-auto"><a href={plan.link} target="_blank" rel="noopener noreferrer" aria-label={`Join ${plan.classes} ${classType} monthly membership`}>Join now <ArrowRight /></a></Button> : <div className="mt-auto text-sm py-2">Joining link coming soon</div>}
        </div>)}
      </div>
      <p className="text-xs leading-relaxed mt-6">Auto-renews monthly. Cancel with 7 days’ notice before your next billing date. Rollover applies to limited monthly memberships, not Unlimited. The pop-up discount does not apply to holiday bring-a-guest classes. {classType === "reformer" ? "Reformer classes are available at all six studios." : "Mat, Barre & Yoga are available in Limerick and Kildare Town."}</p>
    </div>
  </section>;
}
