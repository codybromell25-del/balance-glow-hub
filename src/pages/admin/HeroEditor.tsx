import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useHeroContent } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const HeroEditor = () => {
  const { data: heroContent, isLoading } = useHeroContent();
  const [formData, setFormData] = useState({
    headline_line1: "",
    headline_line2: "",
    headline_line3: "",
    subtitle: "",
    description: "",
    intro_offer_text: "",
    cta_button1_text: "",
    cta_button1_link: "",
    cta_button2_text: "",
    cta_button2_link: "",
  });
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (heroContent) {
      setFormData({
        headline_line1: heroContent.headline_line1 || "",
        headline_line2: heroContent.headline_line2 || "",
        headline_line3: heroContent.headline_line3 || "",
        subtitle: heroContent.subtitle || "",
        description: heroContent.description || "",
        intro_offer_text: heroContent.intro_offer_text || "",
        cta_button1_text: heroContent.cta_button1_text || "",
        cta_button1_link: heroContent.cta_button1_link || "",
        cta_button2_text: heroContent.cta_button2_text || "",
        cta_button2_link: heroContent.cta_button2_link || "",
      });
    }
  }, [heroContent]);

  const handleSave = async () => {
    setSaving(true);
    
    const { error } = await supabase
      .from("hero_content")
      .update(formData)
      .eq("id", heroContent?.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save changes",
      });
    } else {
      toast({
        title: "Saved",
        description: "Hero content updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["hero-content"] });
    }
    
    setSaving(false);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Hero Section">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Hero Section">
      <div className="max-w-2xl space-y-8">
        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Headline</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="line1">Line 1</Label>
              <Input
                id="line1"
                value={formData.headline_line1}
                onChange={(e) => setFormData({ ...formData, headline_line1: e.target.value })}
                placeholder="balance."
              />
            </div>
            <div>
              <Label htmlFor="line2">Line 2</Label>
              <Input
                id="line2"
                value={formData.headline_line2}
                onChange={(e) => setFormData({ ...formData, headline_line2: e.target.value })}
                placeholder="Reformer Pilates."
              />
            </div>
            <div>
              <Label htmlFor="line3">Line 3</Label>
              <Input
                id="line3"
                value={formData.headline_line3}
                onChange={(e) => setFormData({ ...formData, headline_line3: e.target.value })}
                placeholder="Redefined."
              />
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Content</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="— Dynamic Reformer Pilates"
              />
            </div>
            <div>
              <Label htmlFor="intro_offer">Intro Offer Text</Label>
              <Input
                id="intro_offer"
                value={formData.intro_offer_text}
                onChange={(e) => setFormData({ ...formData, intro_offer_text: e.target.value })}
                placeholder="Intro Offer: 4 Classes for €60"
              />
            </div>
            <div>
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Call to Action Buttons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-muted-foreground">Primary Button</h4>
              <div>
                <Label htmlFor="cta1_text">Button Text</Label>
                <Input
                  id="cta1_text"
                  value={formData.cta_button1_text}
                  onChange={(e) => setFormData({ ...formData, cta_button1_text: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="cta1_link">Button Link</Label>
                <Input
                  id="cta1_link"
                  value={formData.cta_button1_link}
                  onChange={(e) => setFormData({ ...formData, cta_button1_link: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-muted-foreground">Secondary Button</h4>
              <div>
                <Label htmlFor="cta2_text">Button Text</Label>
                <Input
                  id="cta2_text"
                  value={formData.cta_button2_text}
                  onChange={(e) => setFormData({ ...formData, cta_button2_text: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="cta2_link">Button Link</Label>
                <Input
                  id="cta2_link"
                  value={formData.cta_button2_link}
                  onChange={(e) => setFormData({ ...formData, cta_button2_link: e.target.value })}
                />
              </div>
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

export default HeroEditor;
