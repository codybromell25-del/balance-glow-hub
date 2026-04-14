import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Is Pilates suitable for beginners?",
        a: "Yes, Pilates is suitable for all levels, including beginners. Our instructors guide you step by step."
      },
      {
        q: "Do I need to be fit or flexible to start?",
        a: "No, Pilates is designed for all fitness levels. We adapt exercises to your abilities."
      },
      {
        q: "What's the difference between Reformer Pilates and Mat Pilates?",
        a: "Reformer Pilates uses specialized equipment for resistance and support, while Mat Pilates is performed on the floor using bodyweight and small props."
      },
      {
        q: "What should I expect in my first class?",
        a: "You'll be guided through exercises safely, learn proper form, and get familiar with the studio environment."
      },
      {
        q: "Do you offer intro offers or beginner packages?",
        a: "Yes, we have introductory packages available. Please check our website or refer to balance policies for details."
      },
      {
        q: "How early should I arrive for my first class?",
        a: "Please arrive 10–15 minutes early to check in and get set up."
      }
    ]
  },
  {
    category: "Health & Safety",
    questions: [
      {
        q: "Is Pilates good for injury recovery or back pain?",
        a: "Pilates can support injury recovery, but always consult your healthcare provider first. Our instructors will modify exercises as needed."
      },
      {
        q: "Can I do Pilates if I'm pregnant or postnatal?",
        a: "Pregnancy and postnatal sessions may require adjustments. Please refer to balance policies or speak to a team member before booking."
      },
      {
        q: "Can I attend regular classes at balance while pregnant?",
        a: "Our regular classes aren't suitable during pregnancy at any stage. We recommend joining our Gentle Flow classes instead, which are designed to support you safely throughout all trimesters."
      },
      {
        q: "Can I attend if I'm injured?",
        a: "Please consult your healthcare provider first. For modifications, speak to a team member."
      },
      {
        q: "Do I need medical clearance?",
        a: "It's recommended if you have pre-existing conditions or injuries."
      },
      {
        q: "Is Pilates suitable during pregnancy?",
        a: "Certain classes are safe; please refer to balance policies or speak with staff."
      },
      {
        q: "What if I feel pain during class?",
        a: "Stop and notify the instructor immediately."
      },
      {
        q: "Where can I find balance's health and safety information?",
        a: "Our health and safety policies can be found on our Terms & Conditions page. If you have any specific concerns, please don't hesitate to contact us directly."
      }
    ]
  },
  {
    category: "What to Bring & Wear",
    questions: [
      {
        q: "What should I wear to Pilates?",
        a: "Comfortable, breathable clothing that allows full range of motion."
      },
      {
        q: "Do I need grip socks?",
        a: "Grip socks are recommended, especially for Reformer classes."
      },
      {
        q: "Do you sell socks or merchandise?",
        a: "Yes, please ask at the studio reception."
      },
      {
        q: "Do I need to bring a mat or equipment?",
        a: "All equipment is provided for Reformer classes; mats are provided for Mat classes."
      },
      {
        q: "Can I bring my phone into the studio?",
        a: "Phones should be kept on silent or in your bag during class."
      }
    ]
  },
  {
    category: "Classes & Results",
    questions: [
      {
        q: "How many people are in a class?",
        a: "Class sizes vary, but we keep numbers small to ensure attention to form."
      },
      {
        q: "Will the instructor correct my form?",
        a: "Yes, instructors provide guidance and adjustments to ensure safety."
      },
      {
        q: "Is Reformer Pilates safe?",
        a: "Yes, when done with instruction and proper form."
      },
      {
        q: "How often should I do Pilates to see results?",
        a: "Most members see results attending 2–3 times per week."
      },
      {
        q: "Is Pilates more strength or flexibility focused?",
        a: "Pilates combines strength, flexibility, and control for a balanced workout."
      }
    ]
  },
  {
    category: "Studio Information",
    questions: [
      {
        q: "Where are you located?",
        a: "Please check our website for studio addresses and directions."
      },
      {
        q: "Is there parking available?",
        a: "Parking information is available on the website."
      },
      {
        q: "Are classes mixed-gender?",
        a: "Yes, all classes are mixed."
      },
      {
        q: "Can I change my email?",
        a: "Yes, you can. Please contact us and we'll update it for you."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ | balance studios"
        description="Frequently asked questions about Reformer Pilates at balance studios. Find answers about classes, pricing, what to wear, and more."
        canonical="/faq"
      />
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about Reformer Pilates at balance studios.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {faqData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {section.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {section.questions.map((item, itemIndex) => (
                      <AccordionItem
                        key={itemIndex}
                        value={`${sectionIndex}-${itemIndex}`}
                        className="border border-border rounded-lg px-4 bg-card"
                      >
                        <AccordionTrigger className="text-left font-heading font-medium hover:no-underline py-4">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
