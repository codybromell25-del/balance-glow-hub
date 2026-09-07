import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, ShoppingBag } from "lucide-react";
import { fetchProductByHandle, formatPrice, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [variantId, setVariantId] = useState<string | null>(null);

  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle)
      .then((p) => {
        setProduct(p);
        const first = p?.node.variants.edges.find((v) => v.node.availableForSale)?.node ?? p?.node.variants.edges[0]?.node;
        setVariantId(first?.id ?? null);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [handle]);

  const node = product?.node;
  const variants = node?.variants.edges.map((v) => v.node) ?? [];
  const variant = variants.find((v) => v.id === variantId) ?? variants[0];
  const image = node?.images.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!product || !variant) return;
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
    <div className="min-h-screen flex flex-col">
      <SEO
        title={node ? `${node.title} | balance studios` : "Shop | balance studios"}
        description={node?.description?.slice(0, 155) || "Shop balance studios essentials."}
        canonical={`/product/${handle}`}
      />
      <Navigation />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to shop
            </Link>
            <CartDrawer />
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : !node ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">Product not found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="aspect-square overflow-hidden rounded-3xl bg-sage/30">
                {image && (
                  <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover" />
                )}
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-heading text-4xl md:text-5xl mb-4">{node.title}</h1>
                <p className="text-2xl mb-6">
                  {variant
                    ? formatPrice(variant.price.amount, variant.price.currencyCode)
                    : formatPrice(
                        node.priceRange.minVariantPrice.amount,
                        node.priceRange.minVariantPrice.currencyCode
                      )}
                </p>
                {node.description && (
                  <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                    {node.description}
                  </p>
                )}

                {variants.length > 1 && (
                  <div className="mb-8">
                    <p className="text-sm font-medium mb-3">Options</p>
                    <div className="flex flex-wrap gap-2">
                      {variants.map((v) => (
                        <Button
                          key={v.id}
                          variant={v.id === variantId ? "default" : "outline"}
                          className="rounded-full"
                          disabled={!v.availableForSale}
                          onClick={() => setVariantId(v.id)}
                        >
                          {v.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  size="lg"
                  className="rounded-full w-full sm:w-auto"
                  onClick={handleAddToCart}
                  disabled={isLoading || !variant?.availableForSale}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : variant?.availableForSale ? (
                    "Add to bag"
                  ) : (
                    "Sold out"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
