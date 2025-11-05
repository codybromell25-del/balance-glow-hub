import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import kellyOwner from "@/assets/kelly-owner.avif";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        {/* Meet Kelly */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">
                Meet Kelly, Owner of Balance
              </h2>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border-2 border-primary/40">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative flex justify-center">
                      <img 
                        src={kellyOwner} 
                        alt="Kelly, Owner of Balance Studios"
                        className="w-64 h-64 object-cover rounded-full border-4 border-primary/30 shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Meet Kelly, the driving force behind a thriving community at her studios, where 
                      exceptional care is the cornerstone of every interaction. With a deep commitment 
                      to her clients, Kelly has honed her skills through extensive training with the NTC 
                      and Balanced Body, but it's her years of hands-on experience in private Pilates 
                      sessions that truly set her apart.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Navigating through the complexities of various client needs, Kelly has cultivated 
                      a sense of trust and confidence, fostering an ever-growing circle of satisfied 
                      clients. Her passion for helping others shines through in every session, as she 
                      tirelessly works to ensure her clients feel their best.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      With her warm and approachable demeanour, Kelly has cultivated a welcoming 
                      atmosphere, where laughter and camaraderie abound. Together with her team of 
                      instructors, known for their dedication to detail and penchant for fun, Kelly 
                      has built a reputation for delivering not just workouts, but transformative 
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground">Our Mission</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Balance Studios, we believe that wellness should be personal, supportive, and 
                  empowering. With five locations across Kildare, Wicklow, and Meath, we've 
                  created spaces where small groups, expert instruction, and genuine community come together.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every studio is thoughtfully designed to feel like a sanctuary—calm, light-filled, 
                  and welcoming. Our instructors are more than just teachers; they're your partners 
                  in building strength, grace, and balance that extends far beyond the reformer.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you're stepping onto a reformer for the first time or you're an experienced 
                  practitioner, you'll find your place here. Because at Balance, every body truly is beautiful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
                What We Stand For
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Inclusivity",
                    description: "Every body, every age, every fitness level—all are welcome here.",
                  },
                  {
                    title: "Excellence",
                    description: "Expert instructors committed to your form, safety, and progress.",
                  },
                  {
                    title: "Community",
                    description: "More than a studio—a supportive space where you belong.",
                  },
                  {
                    title: "Transformation",
                    description: "Real results through consistent, mindful, empowered practice.",
                  },
                ].map((value) => (
                  <div key={value.title} className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
