import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Balance Studios was born from a simple belief: that strength, flexibility and confidence 
                are for every body. We're here to make reformer Pilates accessible, welcoming, 
                and transformative.
              </p>
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

        {/* Team Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Meet Our Expert Instructors
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Our team brings years of experience, specialized training, and genuine passion 
                to every class. They're here to guide, support, and inspire you.
              </p>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-muted-foreground italic">
                  Instructor profiles coming soon. Each member of our team is certified in reformer 
                  Pilates and committed to helping you discover your strength.
                </p>
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
