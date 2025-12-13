import { Quote, BadgeCheck, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Vanessa McIntyre",
    text: "I have been attending balance for reformer pilates for over 2 years now. I took a break when I fell pregnant and recently returned to classes. The girls are so helpful and knowledgeable about which exercise is best for you. Beautiful studio and the staff are just amazing. Thank you all for everything, really enjoy being back!",
    rating: 5
  }, {
    name: "Collette Coyne",
    text: "Really enjoyed the taster class, the teacher was very experienced and very informative on all aspects of reformer pilates. Would highly recommend.",
    rating: 5
  }, {
    name: "Jennie Kenna",
    text: "Always friendly and welcoming in balance Clane, the girls are fantastic and I'm absolutely hooked. I can feel the strength in my body and I'm only a few classes in.",
    rating: 5
  }, {
    name: "Maureen Stanley",
    text: "Super focussed classes with really experienced instructors.",
    rating: 5
  }, {
    name: "Orlaith Kelly",
    text: "I am hooked! My healthy addiction! I just can't get enough of these classes! Every time I go, I feel myself getting stronger mentally and physically. All the instructors are amazing and are so knowledgeable! I am telling everyone to go to balance.",
    rating: 5
  }, {
    name: "Fossil Specialist",
    text: "What a find… Kelly is an amazing teacher with an outstanding way with her. A brilliant business and the most enjoyable exercise classes. Her attention to detail and commitment is outstanding. Would recommend to every level of fitness — even if you haven't done anything in years you will be amazed at how quickly you can start gaining back strength and agility.",
    rating: 5
  }, {
    name: "Orla Anderson",
    text: "balance is great. I've gone to over 100 classes here and reformer pilates keeps my back pain at bay. Highly recommend for anyone with back issues — give it a try.",
    rating: 5
  }, {
    name: "Tara McCormack",
    text: "Great classes that change and challenge you all the time, instructors very helpful and informative. Once you start you won't be able to stop 😃",
    rating: 5
  }, {
    name: "Kath",
    text: "First time trying it, made sure I knew what I needed to know before we started and helped me when I got stuck. Felt individual service while part of the class. Looking forward to my next class.",
    rating: 5
  }, {
    name: "Natasha Dolly",
    text: "Huge variety in every class. Excellent full body strength workout.",
    rating: 5
  }, {
    name: "Olive Aylward",
    text: "Amazing teachers, beautiful studio, friendly atmosphere.",
    rating: 5
  }, {
    name: "Fiona O'Reilly",
    text: "I've been going to classes at the balance studio in Kildare Town since it opened in October 2023. The classes are always well planned out and challenging. The studio is gorgeous and the equipment is spotless. All the instructors are fantastic, but Ciara is my favourite ☺️",
    rating: 5
  }];
  return <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 bg-destructive-foreground">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">
            Why People Keep Coming Back
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Honest words from the people living their best balance life.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 4000
        })]} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background p-4 md:p-8 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />

                    <p className="text-foreground leading-relaxed mb-6 italic flex-grow">"{testimonial.text}"</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="font-heading font-medium text-foreground">{testimonial.name}</p>
                            <BadgeCheck className="w-4 h-4 text-blue-500" />
                          </div>
                          <p className="text-sm text-muted-foreground">Google Review</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-yellow-500 text-lg">
                            ★
                          </span>)}
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>

            {/* Mobile swipe indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden pointer-events-none">
              <div className="animate-pulse">
                <ChevronRight className="w-8 h-8 text-muted-foreground/30" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;