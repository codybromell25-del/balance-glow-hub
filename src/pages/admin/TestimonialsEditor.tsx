import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useTestimonials } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2, Save, Star } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const TestimonialsEditor = () => {
  const { data: testimonials = [], isLoading } = useTestimonials();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    customer_name: "",
    review_text: "",
    rating: 5,
    is_active: true,
  });
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleAdd = async () => {
    setSaving(true);
    
    const { error } = await supabase
      .from("testimonials")
      .insert({
        ...formData,
        display_order: testimonials.length + 1,
      });

    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to add testimonial" });
    } else {
      toast({ title: "Added", description: "Testimonial added successfully" });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      setFormData({ customer_name: "", review_text: "", rating: 5, is_active: true });
    }
    
    setSaving(false);
  };

  const handleUpdate = async (id: string) => {
    setSaving(true);
    
    const { error } = await supabase
      .from("testimonials")
      .update(formData)
      .eq("id", id);

    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update testimonial" });
    } else {
      toast({ title: "Updated", description: "Testimonial updated successfully" });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      setEditingId(null);
    }
    
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    
    const { error } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", id);

    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to delete testimonial" });
    } else {
      toast({ title: "Deleted", description: "Testimonial deleted" });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    }
  };

  const startEditing = (testimonial: typeof testimonials[0]) => {
    setEditingId(testimonial.id);
    setFormData({
      customer_name: testimonial.customer_name,
      review_text: testimonial.review_text,
      rating: testimonial.rating || 5,
      is_active: testimonial.is_active ?? true,
    });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Testimonials">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Testimonials">
      <div className="space-y-8">
        {/* Add New */}
        <div className="bg-card p-6 rounded-xl border border-border">
          <h3 className="text-lg font-semibold mb-4">Add New Testimonial</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Customer Name</Label>
                <Input
                  value={formData.customer_name}
                  onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                  placeholder="Sarah M."
                />
              </div>
              <div>
                <Label>Rating (1-5)</Label>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <div>
              <Label>Review Text</Label>
              <Textarea
                value={formData.review_text}
                onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
                rows={3}
                placeholder="The instructors are amazing..."
              />
            </div>
            <Button onClick={handleAdd} disabled={saving || !formData.customer_name || !formData.review_text}>
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </div>
        </div>

        {/* Existing Testimonials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Existing Testimonials ({testimonials.length})</h3>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-6 rounded-xl border border-border">
              {editingId === testimonial.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Customer Name</Label>
                      <Input
                        value={formData.customer_name}
                        onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Rating</Label>
                      <Input
                        type="number"
                        min={1}
                        max={5}
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Review Text</Label>
                    <Textarea
                      value={formData.review_text}
                      onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                    />
                    <Label>Active</Label>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleUpdate(testimonial.id)} disabled={saving}>
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setEditingId(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">{testimonial.customer_name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">{testimonial.review_text}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => startEditing(testimonial)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(testimonial.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default TestimonialsEditor;
