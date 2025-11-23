import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-8 pb-4 md:pt-12 md:pb-8 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                Terms & Conditions
              </h1>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Arrival & Attendance */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Arrival & Attendance
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Please arrive 5–10 minutes before your scheduled class to allow time to get settled.
                  </p>
                  <p>
                    If you arrive more than 10 minutes late, you will be marked as Absent and charged for the class. Late arrivals cannot join the class once it has started.
                  </p>
                </div>
              </div>

              {/* Phones & Recording */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Phones & Recording
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    No recording or filming is permitted in the studio.
                  </p>
                  <p>
                    Please switch your phone off or to silent and leave it, along with your shoes and bags, in the reception area.
                  </p>
                </div>
              </div>

              {/* Cancellations */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Cancellations
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We operate a 24-hour cancellation policy for all group classes.
                  </p>
                  <p>
                    Cancellations made within 24 hours of class time will be charged in full.
                  </p>
                  <p>
                    Please see the Unlimited Monthly Membership below for cancellation policy.
                  </p>
                  <p>
                    We cannot facilitate class swaps or transfer cancellations to another date.
                  </p>
                  <p>
                    Cancellations must be made via our online booking system or the Balance Ireland App.
                  </p>
                  <p>
                    This policy applies uniformly and cannot be adjusted on a case-by-case basis.
                  </p>
                </div>
              </div>

              {/* Health & Safety */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Health & Safety
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    All clients must be over 16 years of age and in good health to attend Reformer Pilates classes.
                  </p>
                  <p>
                    We do not accept pregnant clients into our regular classes. Only Gentle Flow classes are suitable during pregnancy.
                  </p>
                  <p>
                    You must agree to and sign our Health & Safety Waiver when creating an account.
                  </p>
                  <p>
                    It is your responsibility to inform Balance of any injuries or health changes during your time with us. We may require written clearance from your Medical Practitioner or Physiotherapist before you can attend classes.
                  </p>
                  <p>
                    If you experience middle-ear issues, please note this may cause disorientation on the Reformer. We suggest booking a single class first to assess suitability.
                  </p>
                  <p>
                    If our instructors believe you are not currently suitable for our classes, a member of our team will contact you to recommend alternative options better suited to your needs.
                  </p>
                </div>
              </div>

              {/* Class Pack Agreement */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Class Pack Agreement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most Class Packs have a 6-month expiry. We are generous with this timeframe but cannot extend beyond the expiry date.
                  </p>
                  <p>
                    Partially used packs are non-refundable.
                  </p>
                  <p>
                    Introductory Offers are only available to new clients and can only be used once per person. Any violation may result in the loss of classes and/or account cancellation.
                  </p>
                  <p>
                    Class Packs are non-transferable and cannot be shared. You may purchase a class for another client by adding them as a Family Member on your account.
                  </p>
                  <p>
                    Balance reserves the right to change instructors if cover is required. Packages are not sold with a guarantee of a specific teacher.
                  </p>
                  <p>
                    We reserve the right to cancel classes if attendance numbers are low.
                  </p>
                </div>
              </div>

              {/* Monthly Membership Agreement */}
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Monthly Membership Agreement
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You may cancel your membership at any time by emailing info@balancestudios.ie.
                  </p>
                  <p>
                    Unused classes do not carry over to the next month. Any remaining classes at month-end are forfeited.
                  </p>
                  <p>
                    Failure to adhere to our membership policies may result in suspension or termination of your membership.
                  </p>
                </div>
              </div>

              {/* Unlimited Monthly Membership */}
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Unlimited Monthly Membership
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    These charges will be applied directly to the card saved on your account.
                  </p>
                  <p>
                    A Late Cancellation (less than 24 hrs before class start time) will incur a €10 charge.
                  </p>
                  <p>
                    A No Show (failure to attend a booked class without cancelling) will incur a €20 charge.
                  </p>
                  <p>
                    These charges will be applied directly to the card saved on your account.
                  </p>
                  <p>
                    This policy is applied uniformly and cannot be reviewed on a case-by-case basis.
                  </p>
                  <p>
                    Failure to adhere to our membership policies may result in suspension or termination of your membership.
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

export default Terms;
