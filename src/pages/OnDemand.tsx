import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import studioPhoto from "@/assets/limerick-studio-3-hero.jpg";

const LIBRARY_URL = "https://momence.com/video/plugin/62930";
const SIGN_IN_URL = "https://momence.com/sign-in?hostId=62930";

export default function OnDemand() {
  const steps = [
    {
      step: "1",
      title: "Open the library",
      copy: "Everything we've filmed lives in one place — mat pilates sessions you can start whenever suits you.",
    },
    {
      step: "2",
      title: "Sign in",
      copy: "Use the same balance account you book classes with. If your membership is active, you're already in.",
    },
    {
      step: "3",
      title: "Press play",
      copy: "Roll out a mat, follow the cues, and finish when you've had enough. Short sessions and longer ones both there.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <SEO
        title="On Demand Classes for Members | balance studios"
        description="A complimentary library of mat pilates classes for balance members, included free with every membership. Sign in with your balance account and press play."
        canonical="/on-demand"
      />
      <Navigation />

      <main className="container px-4 md:px-8 py-10 md:py-16 pb-28 md:pb-16">
        <p className="text-xs mb-4">balance studios · included with your membership</p>
        <h1 className="text-4xl md:text-6xl leading-tight">
          on demand<span className="text-sage">.</span>
        </h1>
        <p className="max-w-2xl mt-6 text-lg">
          A small, growing library of mat pilates sessions you can do wherever you are —
          clear cues, options throughout, and nothing to set up beyond a mat.
        </p>

        <div className="mt-8 rounded-md bg-accent/60 border border-sage/40 p-6 md:p-8 max-w-3xl">
          <p className="font-heading italic text-2xl md:text-3xl leading-snug">
            For members<span className="text-sage">,</span> and included free<span className="text-sage">.</span>
          </p>
          <p className="mt-3 leading-relaxed max-w-2xl">
            There's nothing to buy and nothing extra on your bill — your membership already
            covers it. Think of it as a little gift for being with us: sign in with the balance
            account you already book classes with, and the library is yours.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {["Members only", "No extra cost", "Mat pilates at home"].map((tag) => (
              <span
                key={tag}
                className="text-xs border border-sage/50 rounded-full px-3 py-1 bg-background"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <Button asChild variant="sage" size="lg">
            <a href={LIBRARY_URL} target="_blank" rel="noopener noreferrer">
              Open the video library
            </a>
          </Button>
          <Button asChild variant="quiet" size="lg">
            <a href={SIGN_IN_URL} target="_blank" rel="noopener noreferrer">
              Sign in to watch
            </a>
          </Button>
        </div>
        <p className="text-xs mt-4 max-w-2xl">
          Both open the Momence player in a new tab, where your balance account works the same
          way it does for bookings. If you're a member, you're already in.
        </p>

        <img
          src={studioPhoto}
          alt="The reformer room at balance Limerick, with rows of reformers and the balance logos on the wall"
          className="w-full h-56 md:h-80 object-cover object-center rounded-md my-10"
        />

        <h2 className="text-2xl md:text-3xl mb-6">
          How it works<span className="text-sage">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 border-y border-border py-8 mb-12">
          {steps.map((s) => (
            <div key={s.step}>
              <p className="font-heading italic text-sage-deep text-lg">{s.step}</p>
              <h3 className="text-xl mt-1 mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl mb-3">What's in the library</h2>
          <p className="leading-relaxed max-w-2xl">
            Full-body mat pilates — core work, stretch and reset sessions, and everything in
            between. Each session is listed with its length so you can pick one that fits the
            time you've got.
          </p>
        </div>

        <div className="mb-12 rounded-md border border-border p-6 md:p-8 max-w-3xl">
          <h2 className="text-2xl mb-3">
            Not a member yet<span className="text-sage">?</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl">
            The library sits inside your membership, so there's no separate pass to buy. If
            you're not with us yet, the easiest way in is a membership — and the videos come
            with it, free, from day one.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild variant="sage">
              <a href="/pricing">See memberships</a>
            </Button>
            <Button asChild variant="quiet">
              <a href="/membership-offers">New here? Start with an intro offer</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-2xl md:text-3xl">
            Ready when you are<span className="text-sage">.</span>
          </h2>
          <p className="text-sm mt-3 max-w-2xl">
            If you can't find a session you like, or a video won't open, tell us and we'll sort
            it — it's all about balance.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild variant="sage">
              <a href={LIBRARY_URL} target="_blank" rel="noopener noreferrer">
                Open the video library
              </a>
            </Button>
            <Button asChild variant="quiet">
              <a href="mailto:info@balancestudios.ie">Email us</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
