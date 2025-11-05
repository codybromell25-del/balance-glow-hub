import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Balance Studios Grip Socks",
      category: "Apparel",
      price: 15,
      description: "Non-slip grip socks perfect for reformer Pilates. Available in multiple colors.",
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      price: 25,
      description: "Keep hydrated in style with our branded 750ml insulated water bottle.",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    },
    {
      id: 3,
      name: "Beginner Starter Pack",
      category: "Bundles",
      price: 45,
      description: "Everything you need to start: grip socks, water bottle, and resistance band.",
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
      badge: "Best Value"
    },
    {
      id: 4,
      name: "Premium Yoga Mat",
      category: "Equipment",
      price: 65,
      description: "Extra thick 6mm mat with Balance Studios branding. Perfect for mat Pilates.",
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    },
    {
      id: 5,
      name: "Resistance Band Set",
      category: "Equipment",
      price: 20,
      description: "Set of 3 resistance bands (light, medium, heavy) for at-home workouts.",
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80",
    },
    {
      id: 6,
      name: "Balance Studios Tote Bag",
      category: "Accessories",
      price: 18,
      description: "Stylish canvas tote bag for carrying your Pilates essentials.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
    },
    {
      id: 7,
      name: "Gift Voucher - 4 Classes",
      category: "Gift Vouchers",
      price: 60,
      description: "Perfect gift for someone new to Pilates. 4 class intro pack voucher.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80",
      badge: "Gift"
    },
    {
      id: 8,
      name: "Gift Voucher - 10 Classes",
      category: "Gift Vouchers",
      price: 140,
      description: "Give the gift of wellness with our 10 class pack voucher.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80",
      badge: "Gift"
    }
  ];

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Shop Balance Studios
              </h1>
              <p className="text-lg text-muted-foreground">
                Elevate your practice with our curated selection of Pilates essentials, apparel, and gift vouchers
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 right-3">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-4">
                    <div className="text-sm text-primary font-medium mb-2">
                      {product.category}
                    </div>
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="mb-3">{product.description}</CardDescription>
                    <div className="text-2xl font-heading font-bold text-foreground">
                      €{product.price}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-secondary/20 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-6">Need Help Choosing?</h2>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you find the perfect products for your Pilates journey. 
                Contact us at any of our studios or reach out via email.
              </p>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
