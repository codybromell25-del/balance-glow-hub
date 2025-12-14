import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useStudios } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const StudiosEditor = () => {
  const { data: studios = [], isLoading } = useStudios();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [saving, setSaving] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateStudio = async (id: string, updates: Record<string, unknown>) => {
    setSaving(id);
    const { error } = await supabase.from("studios").update(updates).eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update" });
    } else {
      toast({ title: "Saved", description: "Studio updated" });
      queryClient.invalidateQueries({ queryKey: ["studios"] });
    }
    setSaving(null);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Studios">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Studios">
      <div className="space-y-6">
        {studios.map((studio) => (
          <StudioCard
            key={studio.id}
            studio={studio}
            expanded={expandedId === studio.id}
            onToggle={() => setExpandedId(expandedId === studio.id ? null : studio.id)}
            onSave={(updates) => updateStudio(studio.id, updates)}
            saving={saving === studio.id}
          />
        ))}
      </div>
    </AdminLayout>
  );
};

interface StudioCardProps {
  studio: {
    id: string;
    name: string;
    slug: string;
    tagline: string | null;
    hero_description: string | null;
    detail_description: string | null;
    address: string | null;
    parking_info: string | null;
    momence_location_id: string | null;
    is_active: boolean | null;
  };
  expanded: boolean;
  onToggle: () => void;
  onSave: (updates: Record<string, unknown>) => void;
  saving: boolean;
}

const StudioCard = ({ studio, expanded, onToggle, onSave, saving }: StudioCardProps) => {
  const [formData, setFormData] = useState({
    tagline: studio.tagline || "",
    hero_description: studio.hero_description || "",
    detail_description: studio.detail_description || "",
    address: studio.address || "",
    parking_info: studio.parking_info || "",
    momence_location_id: studio.momence_location_id || "",
  });

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button
        className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{studio.name}</h3>
            <p className="text-sm text-muted-foreground">{studio.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Switch
            checked={studio.is_active ?? true}
            onCheckedChange={(checked) => onSave({ is_active: checked })}
            onClick={(e) => e.stopPropagation()}
          />
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {expanded && (
        <div className="p-6 border-t border-border space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Tagline</Label>
              <Input
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              />
            </div>
            <div>
              <Label>Momence Location ID</Label>
              <Input
                value={formData.momence_location_id}
                onChange={(e) => setFormData({ ...formData, momence_location_id: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label>Address</Label>
            <Input
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div>
            <Label>Parking Info</Label>
            <Input
              value={formData.parking_info}
              onChange={(e) => setFormData({ ...formData, parking_info: e.target.value })}
            />
          </div>

          <div>
            <Label>Hero Description</Label>
            <Textarea
              value={formData.hero_description}
              onChange={(e) => setFormData({ ...formData, hero_description: e.target.value })}
              rows={2}
            />
          </div>

          <div>
            <Label>Detail Description</Label>
            <Textarea
              value={formData.detail_description}
              onChange={(e) => setFormData({ ...formData, detail_description: e.target.value })}
              rows={3}
            />
          </div>

          <Button onClick={() => onSave(formData)} disabled={saving} className="w-full">
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
      )}
    </div>
  );
};

export default StudiosEditor;
