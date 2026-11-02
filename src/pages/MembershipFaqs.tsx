import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { membershipFaqs, membershipFaqCount } from "@/lib/membershipFaqs";

const Dot = ({ q }: { q?: boolean }) => <span className="text-sage">{q ? "?" : "."}</span>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-sage-deep font-semibold mb-3">
    {children}
  </p>
);

const MembershipFaqs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Membership FAQs | balance studios"
        description="Answers about balance memberships: rollover credits, using your membership at all six studios, on-demand mat pilates, cancelling and freezing."
        canonical="/membership-faqs"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: membershipFaqs.flatMap((group) =>
              group.questions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            ),
          })}
        </script>
      </Helmet>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent to-background pt-32 md:pt-40 pb-12 md:pb-16 text-center px-5">
          <Eyebrow>Membership · the questions we get most</Eyebrow>
          <h1 className="font-heading italic text-5xl md:text-8xl leading-[1.02] max-w-4xl mx-auto">
            Questions, answered<Dot />
          </h1>
          <p className="mt-6 text-base md:text-xl max-w-xl mx-auto text-foreground/75">
            {membershipFaqCount} of the things members ask us most — rollover, renewals, on-demand
            videos, and how to pause or cancel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/pricing"
              className="rounded-full bg-sage-deep text-background px-6 py-3 font-heading transition hover:brightness-105"
            >
              See memberships →
            </a>
            <a
              href="/on-demand"
              className="rounded-full border border-border bg-card px-6 py-3 font-heading transition hover:border-sage"
            >
              What's on demand
            </a>
          </div>
        </section>

        {/* Questions */}
        <section className="container mx-auto px-5 py-12 md:py-20 max-w-3xl">
          <div className="space-y-12 md:space-y-16">
            {membershipFaqs.map((group, groupIndex) => (
              <div key={group.category}>
                <Eyebrow>{`0${groupIndex + 1} · ${group.category}`}</Eyebrow>
                <h2 className="font-heading italic text-3xl md:text-5xl leading-tight">
                  {group.category}
                  <Dot />
                </h2>
                {group.intro && (
                  <p className="mt-3 text-foreground/70 max-w-xl">{group.intro}</p>
                )}
                <Accordion
                  type="single"
                  collapsible
                  className="mt-6 space-y-3"
                >
                  {group.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={item.q}
                      value={`${groupIndex}-${itemIndex}`}
                      className="rounded-2xl border border-border bg-card px-5 md:px-7"
                    >
                      <AccordionTrigger className="text-left font-heading text-lg md:text-xl font-normal hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/75 leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still stuck */}
        <section className="bg-accent/60 py-16 md:py-24">
          <div className="container mx-auto px-5 max-w-3xl text-center">
            <Eyebrow>Anything else</Eyebrow>
            <h2 className="font-heading italic text-4xl md:text-6xl leading-tight">
              Still not sure<Dot q />
            </h2>
            <p className="mt-5 text-lg text-foreground/75 max-w-xl mx-auto">
              Email us and a real person will answer — no call centres, no scripts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@balancestudios.ie"
                className="rounded-full bg-sage-deep text-background px-7 py-3.5 font-heading transition hover:brightness-105"
              >
                Email info@balancestudios.ie
              </a>
              <Link
                to="/pricing"
                className="rounded-full border border-border bg-card px-7 py-3.5 font-heading transition hover:border-sage"
              >
                Back to memberships
              </Link>
            </div>
            <p className="mt-8 text-xs text-foreground/60">
              Class times, studios and prices live on the{" "}
              <a href="/pricing" className="underline">
                memberships page
              </a>
              ; pop-up classes are listed on{" "}
              <a href="/events" className="underline">
                the pop-ups page
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MembershipFaqs;
