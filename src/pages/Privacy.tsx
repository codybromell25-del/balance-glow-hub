import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy | balance studios"
        description="Privacy policy for balance studios. Learn how we collect, use, and protect your personal data in line with GDPR."
        canonical="/privacy"
      />
      <Navigation />
      <main className="pt-24">
        <PageHeader title="Privacy Policy" />

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed">
                  At balance studios, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our website, book classes, or interact with us.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    balance studios is a Reformer Pilates studio operating across Ireland. For any privacy-related questions, you can contact us at info@balancestudios.ie.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  What Data We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may collect the following information when you use our website or book a class:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Booking and purchase history</li>
                    <li>Health and injury information relevant to class participation</li>
                    <li>IP address, browser type, and device information via cookies and analytics tools</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  How We Use Your Data
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use your personal data to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process bookings, purchases, and membership payments</li>
                    <li>Communicate class updates, cancellations, and promotional offers</li>
                    <li>Ensure your safety during classes</li>
                    <li>Improve our website and customer experience</li>
                    <li>Comply with legal and regulatory obligations</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Legal Basis for Processing
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We process your data under the following lawful bases: performance of a contract (bookings and purchases), legitimate interests (improving our services and marketing), consent (where required, such as for marketing emails), and legal obligation.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Sharing Your Data
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We do not sell your personal data. We may share it with trusted third-party service providers who help us operate our business, such as our booking platform, payment processors, email services, and analytics providers. All third parties are required to keep your data secure and use it only for the agreed purpose.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Your Rights
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Under GDPR, you have the right to access, correct, delete, or restrict the processing of your personal data. You may also object to processing and request data portability. To exercise these rights, contact us at info@balancestudios.ie.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Data Retention
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, and reporting requirements.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
