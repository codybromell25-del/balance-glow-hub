import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/lib/trackingConsent";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Cookie Policy | balance studios"
        description="Cookie policy for balance studios. Learn how we use cookies and similar technologies on our website."
        canonical="/cookies"
      />
      <Navigation />
      <main className="">
        <PageHeader title="Cookie Policy" />

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains how balance studios uses cookies and similar technologies on our website. Continuing to browse does not mean you accept optional cookies. In regions requiring consent, optional tracking waits until you choose. If your region cannot be determined, it also waits.
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
                    Google Analytics and Microsoft Clarity measure website browsing and interactions under the analytics choice. Meta Pixel measures page visits and advertising interactions under the advertising choice. Meta Pixel is not loaded on the thank-you page, and this website does not report purchases or share customer matching information. Google Tag Manager is currently disabled pending a review of its tags. Momence checkout is a separate service; its tracking and consent handling have not been verified.
                  </p>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Managing Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Use Cookie settings to accept or reject analytics and advertising separately, or withdraw an earlier acceptance. Your current choice stays in place while settings are open. We store a random browser reference, the notice version and text, your choices, region where available, and timestamps on this device, preserving earlier choices when you withdraw. Applicable advertising opt-outs are honoured. Clearing browser storage removes this record. Browser settings can also manage cookies.
                  </p>
                  <Button variant="sage" onClick={openCookieSettings}>Cookie settings</Button>
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
