import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Video, Users } from "lucide-react";

const Resources = () => {
  const blogPosts = [
    {
      title: "Getting Started with Reformer Pilates",
      excerpt: "Everything you need to know before your first class, from what to wear to what to expect.",
      category: "Beginners Guide",
      date: "Coming Soon",
    },
    {
      title: "The Benefits of Small Group Classes",
      excerpt: "Why boutique class sizes make all the difference in your Pilates journey.",
      category: "Wellness Insights",
      date: "Coming Soon",
    },
    {
      title: "Building Core Strength Safely",
      excerpt: "Expert tips on progressing your core work without injury.",
      category: "Movement Tips",
      date: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Resources & Blog
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tips, insights, and stories from our community to support your wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Movement Tips",
                  description: "Expert guidance on form, technique, and progression",
                },
                {
                  icon: Video,
                  title: "Wellness Insights",
                  description: "Holistic health, nutrition, and mindful living",
                },
                {
                  icon: Users,
                  title: "Community Stories",
                  description: "Real transformations from real Balance Studios clients",
                },
              ].map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Latest Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.title}
                    className="bg-card rounded-lg border border-border hover:shadow-lg transition-all overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/30" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                        {post.category}
                      </p>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-card p-8 rounded-lg border border-border inline-block">
                  <p className="text-muted-foreground">
                    Blog content coming soon. Stay tuned for expert tips, wellness insights, 
                    and community stories.
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

export default Resources;
