import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, formatPrice, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const ProductCard = ({ product }: { product: ShopifyProduct }) => {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const node = product.node;
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges.find((v) => v.node.availableForSale)?.node ?? node.variants.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${node.handle}`} className="block">
        <div className="aspect-square overflow-hidden rounded-2xl bg-sage/30">
          {image && (
            <img
              src={image.url}
              alt={image.altText || node.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </Link>
      <div className="flex-1 pt-4">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-heading text-xl">{node.title}</h3>
        </Link>
        {node.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{node.description}</p>
        )}
        <p className="mt-2 font-medium">
          {formatPrice(node.priceRange.minVariantPrice.amount, node.priceRange.minVariantPrice.currencyCode)}
        </p>
      </div>
      <Button className="mt-4 rounded-full bg-sage text-black hover:bg-sage/80" onClick={handleAddToCart} disabled={isLoading || !variant?.availableForSale}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : variant?.availableForSale ? "Add to bag" : "Sold out"}
      </Button>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(50)
      .then(setProducts)
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Shop | balance studios - Pilates Essentials"
        description="Shop balance studios essentials — grip socks, bottles, mats and more for your Pilates practice."
        canonical="/shop"
      />
      <Navigation />

      <main className="flex-1 pt-20 lg:pt-12">
        <PageHeader
          title="Shop"
          subtitle="A small, considered collection of essentials for your practice."
        />

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="flex justify-end mb-6">
              <CartDrawer />
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
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
