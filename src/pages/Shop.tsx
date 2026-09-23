import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { SHOP_ITEMS, STUDIOS, StudioSlug, ShopItem } from "@/lib/shopProducts";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value);

const ProductCard = ({ item, studio }: { item: ShopItem; studio: StudioSlug | null }) => {
  const link = studio ? item.links[studio] : undefined;

  return (
    <div className="group flex flex-col w-full max-w-xs sm:max-w-sm">
      <div className="aspect-square overflow-hidden rounded-2xl bg-sage/30">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 pt-4">
        <h3 className="font-heading text-xl">{item.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        <p className="mt-2 font-medium">{formatPrice(item.price)}</p>
      </div>
      {!studio ? (
        <Button className="mt-4 rounded-full bg-sage text-black hover:bg-sage/80" disabled>
          Choose a studio first
        </Button>
      ) : link ? (
        <Button asChild className="mt-4 rounded-full bg-sage text-black hover:bg-sage/80 font-heading">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Buy now
          </a>
        </Button>
      ) : (
        <Button className="mt-4 rounded-full bg-sage text-black hover:bg-sage/80" disabled>
          Not available at this studio
        </Button>
      )}
    </div>
  );
};

const Shop = () => {
  const [studio, setStudio] = useState<StudioSlug | null>(null);
  const items = studio ? SHOP_ITEMS.filter((i) => i.links[studio]) : SHOP_ITEMS;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Shop | balance studios - Pilates Essentials"
        description="Shop balance studios essentials — grip socks, bottles, mats and more for your Pilates practice."
        canonical="/shop"
      />
      <Navigation />

      <main className="flex-1 pt-24 lg:pt-20">
        <PageHeader
          title="Shop"
          subtitle="A small, considered collection of essentials for your practice."
        />

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <p className="font-heading italic text-lg mb-4">
                Which studio would you like to collect from?
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {STUDIOS.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => setStudio(s.slug)}
                    className={`rounded-full px-5 py-2 text-sm border transition-colors ${
                      studio === s.slug
                        ? "bg-sage text-black border-sage"
                        : "border-border text-foreground hover:border-sage"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">
                  Nothing available at this studio just yet.
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
                {items.map((item) => (
                  <ProductCard key={item.id} item={item} studio={studio} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
