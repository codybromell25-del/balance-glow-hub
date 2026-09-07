import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Cookie Policy | balance studios"
        description="Cookie policy for balance studios. Learn how we use cookies and similar technologies on our website."
        canonical="/cookies"
      />
      <Navigation />
      <main className="pt-24">
        <PageHeader title="Cookie Policy" />

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains how balance studios uses cookies and similar technologies on our website. By continuing to use our site, you consent to the use of cookies as described below.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  What Are Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, improve functionality, and provide information to the site owners.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  How We Use Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential cookies:</strong> required for the website to function correctly, such as maintaining your session and enabling secure logins.</li>
                    <li><strong>Analytics cookies:</strong> help us understand how visitors interact with our website so we can improve the experience.</li>
                    <li><strong>Marketing cookies:</strong> used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</li>
                  </ul>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Third-Party Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may use third-party services such as Google Analytics and Meta Pixel. These services may set their own cookies to track usage and provide insights. We do not control these cookies, and you should review the privacy policies of the relevant third parties for more information.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Managing Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most web browsers allow you to manage or disable cookies through your browser settings. Please note that blocking essential cookies may affect how our website functions.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you have any questions about our use of cookies, please contact us at info@balancestudios.ie.
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

export default Cookies;
