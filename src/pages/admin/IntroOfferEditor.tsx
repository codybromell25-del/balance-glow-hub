import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useIntroOffer } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const IntroOfferEditor = () => {
  const { data: introOffer, isLoading } = useIntroOffer();
  const [formData, setFormData] = useState({
    title: "",
    classes: 4,
    price: 60,
    description: "",
    features: [] as string[],
    purchase_link: "",
    is_active: true,
  });
  const [featuresText, setFeaturesText] = useState("");
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (introOffer) {
      const features = Array.isArray(introOffer.features) ? introOffer.features as string[] : [];
      setFormData({
        title: introOffer.title || "",
        classes: introOffer.classes || 4,
        price: Number(introOffer.price) || 60,
        description: introOffer.description || "",
        features: features,
        purchase_link: introOffer.purchase_link || "",
        is_active: introOffer.is_active ?? true,
      });
      setFeaturesText(features.join("\n"));
    }
  }, [introOffer]);

  const handleSave = async () => {
    setSaving(true);
    
    const features = featuresText.split("\n").filter(f => f.trim());
    
    const { error } = await supabase
      .from("intro_offer")
      .update({
        ...formData,
        features,
      })
      .eq("id", introOffer?.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save changes",
      });
    } else {
      toast({
        title: "Saved",
        description: "Intro offer updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["intro-offer"] });
    }
    
    setSaving(false);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Intro Offer">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Intro Offer">
      <div className="max-w-2xl space-y-8">
        <div className="bg-card p-6 rounded-xl border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Offer Details</h3>
            <div className="flex items-center gap-2">
              <Label htmlFor="active">Active</Label>
              <Switch
                id="active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Intro Offer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="classes">Number of Classes</Label>
                <Input
                  id="classes"
                  type="number"
                  value={formData.classes}
                  onChange={(e) => setFormData({ ...formData, classes: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <Label htmlFor="price">Price (€)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                rows={4}
                placeholder="4 reformer classes&#10;Valid for 30 days&#10;All locations"
              />
            </div>

            <div>
              <Label htmlFor="link">Purchase Link</Label>
              <Input
                id="link"
                value={formData.purchase_link}
                onChange={(e) => setFormData({ ...formData, purchase_link: e.target.value })}
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full">
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </AdminLayout>
  );
};

export default IntroOfferEditor;
