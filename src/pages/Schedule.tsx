import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
                Class Schedule
              </h1>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Book your classes across all our studio locations
              </p>
              
              <div className="bg-card rounded-xl border border-border p-4 shadow-lg">
                <iframe 
                  src="https://brandedweb-next.mindbodyonline.com/components/widgets/schedules/view/8c318465eea/schedule"
                  width="100%" 
                  height="800px"
                  className="rounded-lg"
                  style={{ border: 'none' }}
                  title="Class Schedule"
                  allow="payment"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
