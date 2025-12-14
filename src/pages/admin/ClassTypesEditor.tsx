import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useClassTypes } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, ChevronDown, ChevronUp, Dumbbell } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const ICONS = ["Heart", "BookOpen", "Flame", "Trophy", "Dumbbell", "Timer", "Hourglass"];
const CATEGORIES = ["Foundations & Flow", "Build & Sculpt", "Circuit Training"];
const COLORS = ["green", "orange", "pink"];

const ClassTypesEditor = () => {
  const { data: classTypes = [], isLoading } = useClassTypes();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [saving, setSaving] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateClassType = async (id: string, updates: Record<string, unknown>) => {
    setSaving(id);
    const { error } = await supabase.from("class_types").update(updates).eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update" });
    } else {
      toast({ title: "Saved", description: "Class type updated" });
      queryClient.invalidateQueries({ queryKey: ["class-types"] });
    }
    setSaving(null);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Class Types">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Class Types">
      <div className="space-y-6">
        {classTypes.map((classType) => (
          <ClassTypeCard
            key={classType.id}
            classType={classType}
            expanded={expandedId === classType.id}
            onToggle={() => setExpandedId(expandedId === classType.id ? null : classType.id)}
            onSave={(updates) => updateClassType(classType.id, updates)}
            saving={saving === classType.id}
          />
        ))}
      </div>
    </AdminLayout>
  );
};

interface ClassTypeCardProps {
  classType: {
    id: string;
    name: string;
    category: string;
    icon: string | null;
    difficulty: number | null;
    suitable_for: string | null;
    what_to_expect: string | null;
    category_color: string | null;
    is_active: boolean | null;
  };
  expanded: boolean;
  onToggle: () => void;
  onSave: (updates: Record<string, unknown>) => void;
  saving: boolean;
}

const ClassTypeCard = ({ classType, expanded, onToggle, onSave, saving }: ClassTypeCardProps) => {
  const [formData, setFormData] = useState({
    name: classType.name,
    category: classType.category,
    icon: classType.icon || "Heart",
    difficulty: classType.difficulty || 1,
    suitable_for: classType.suitable_for || "",
    what_to_expect: classType.what_to_expect || "",
    category_color: classType.category_color || "green",
  });

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button
        className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{classType.name}</h3>
            <p className="text-sm text-muted-foreground">{classType.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full ${dot <= (classType.difficulty || 1) ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
          <Switch
            checked={classType.is_active ?? true}
            onCheckedChange={(checked) => onSave({ is_active: checked })}
            onClick={(e) => e.stopPropagation()}
          />
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {expanded && (
        <div className="p-6 border-t border-border space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label>Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Difficulty (1-5)</Label>
              <Input
                type="number"
                min={1}
                max={5}
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Icon</Label>
              <Select
                value={formData.icon}
                onValueChange={(value) => setFormData({ ...formData, icon: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ICONS.map((icon) => (
                    <SelectItem key={icon} value={icon}>{icon}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Category Color</Label>
              <Select
                value={formData.category_color}
                onValueChange={(value) => setFormData({ ...formData, category_color: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COLORS.map((color) => (
                    <SelectItem key={color} value={color}>{color}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Suitable For</Label>
            <Input
              value={formData.suitable_for}
              onChange={(e) => setFormData({ ...formData, suitable_for: e.target.value })}
            />
          </div>

          <div>
            <Label>What to Expect</Label>
            <Textarea
              value={formData.what_to_expect}
              onChange={(e) => setFormData({ ...formData, what_to_expect: e.target.value })}
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

export default ClassTypesEditor;
