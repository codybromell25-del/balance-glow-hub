import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useClassPacks, useMemberships } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, Trash2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const PricingEditor = () => {
  const { data: classPacks = [], isLoading: loadingPacks } = useClassPacks();
  const { data: memberships = [], isLoading: loadingMemberships } = useMemberships();
  const [saving, setSaving] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateClassPack = async (id: string, updates: Record<string, unknown>) => {
    setSaving(id);
    const { error } = await supabase.from("class_packs").update(updates).eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update" });
    } else {
      toast({ title: "Saved", description: "Class pack updated" });
      queryClient.invalidateQueries({ queryKey: ["class-packs"] });
    }
    setSaving(null);
  };

  const updateMembership = async (id: string, updates: Record<string, unknown>) => {
    setSaving(id);
    const { error } = await supabase.from("memberships").update(updates).eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update" });
    } else {
      toast({ title: "Saved", description: "Membership updated" });
      queryClient.invalidateQueries({ queryKey: ["memberships"] });
    }
    setSaving(null);
  };

  if (loadingPacks || loadingMemberships) {
    return (
      <AdminLayout title="Pricing">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Pricing">
      <div className="space-y-10">
        {/* Class Packs */}
        <section>
          <h2 className="text-xl font-heading font-bold mb-6">Class Packs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classPacks.map((pack) => (
              <ClassPackCard
                key={pack.id}
                pack={pack}
                onSave={(updates) => updateClassPack(pack.id, updates)}
                saving={saving === pack.id}
              />
            ))}
          </div>
        </section>

        {/* Memberships */}
        <section>
          <h2 className="text-xl font-heading font-bold mb-6">Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memberships.map((membership) => (
              <MembershipCard
                key={membership.id}
                membership={membership}
                onSave={(updates) => updateMembership(membership.id, updates)}
                saving={saving === membership.id}
              />
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

interface ClassPackCardProps {
  pack: {
    id: string;
    name: string;
    class_count: number;
    price: number;
    validity_days: number;
    pack_type: string;
    is_active: boolean | null;
  };
  onSave: (updates: Record<string, unknown>) => void;
  saving: boolean;
}

const ClassPackCard = ({ pack, onSave, saving }: ClassPackCardProps) => {
  const [price, setPrice] = useState(pack.price);
  const [validityDays, setValidityDays] = useState(pack.validity_days);

  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{pack.name}</h3>
        <span className="text-xs bg-muted px-2 py-1 rounded">{pack.pack_type}</span>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Price (€)</Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <Label>Validity (days)</Label>
            <Input
              type="number"
              value={validityDays}
              onChange={(e) => setValidityDays(parseInt(e.target.value))}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Switch
              checked={pack.is_active ?? true}
              onCheckedChange={(checked) => onSave({ is_active: checked })}
            />
            <Label>Active</Label>
          </div>
          
          <Button
            size="sm"
            onClick={() => onSave({ price, validity_days: validityDays })}
            disabled={saving}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface MembershipCardProps {
  membership: {
    id: string;
    name: string;
    classes_per_month: number | null;
    price: number;
    is_popular: boolean | null;
    is_unlimited: boolean | null;
    is_active: boolean | null;
  };
  onSave: (updates: Record<string, unknown>) => void;
  saving: boolean;
}

const MembershipCard = ({ membership, onSave, saving }: MembershipCardProps) => {
  const [price, setPrice] = useState(membership.price);

  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{membership.name}</h3>
        {membership.is_popular && (
          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Popular</span>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <Label>Price (€/month)</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Switch
              checked={membership.is_active ?? true}
              onCheckedChange={(checked) => onSave({ is_active: checked })}
            />
            <Label>Active</Label>
          </div>
          
          <Button
            size="sm"
            onClick={() => onSave({ price })}
            disabled={saving}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingEditor;
