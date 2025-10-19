import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Clane",
      text: "I was nervous about trying reformer Pilates, but the instructors at Balance made me feel so welcome. Three months in and I've never felt stronger!",
      rating: 5,
    },
    {
      name: "John D.",
      location: "Kildare Town",
      text: "The small class sizes make all the difference. I get personalized attention every session and can really see my progress.",
      rating: 5,
    },
    {
      name: "Emma L.",
      location: "Bray",
      text: "Beautiful studio, fantastic instructors, and a genuinely supportive community. Balance Studios has transformed my wellness routine.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real stories from real clients who've found their balance with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
