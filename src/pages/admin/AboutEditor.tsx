import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAboutContent } from "@/hooks/use-cms-data";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

const AboutEditor = () => {
  const { data: aboutContent = [], isLoading } = useAboutContent();
  const [saving, setSaving] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateContent = async (id: string, updates: { title?: string; content?: string }) => {
    setSaving(id);
    const { error } = await supabase.from("about_content").update(updates).eq("id", id);
    if (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to update" });
    } else {
      toast({ title: "Saved", description: "Content updated" });
      queryClient.invalidateQueries({ queryKey: ["about-content"] });
    }
    setSaving(null);
  };

  if (isLoading) {
    return (
      <AdminLayout title="About Page">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="About Page">
      <div className="space-y-6 max-w-3xl">
        {aboutContent.map((section) => (
          <ContentCard
            key={section.id}
            section={section}
            onSave={(updates) => updateContent(section.id, updates)}
            saving={saving === section.id}
          />
        ))}
      </div>
    </AdminLayout>
  );
};

interface ContentCardProps {
  section: {
    id: string;
    section_key: string;
    title: string | null;
    content: string | null;
  };
  onSave: (updates: { title?: string; content?: string }) => void;
  saving: boolean;
}

const ContentCard = ({ section, onSave, saving }: ContentCardProps) => {
  const [title, setTitle] = useState(section.title || "");
  const [content, setContent] = useState(section.content || "");

  const getSectionLabel = (key: string) => {
    const labels: Record<string, string> = {
      intro: "Introduction",
      kelly: "About Kelly",
      timeline_2015: "Timeline - 2015",
      timeline_2020: "Timeline - 2020",
      timeline_today: "Timeline - Today",
      closing: "Closing Statement",
    };
    return labels[key] || key;
  };

  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{getSectionLabel(section.section_key)}</h3>
        <span className="text-xs bg-muted px-2 py-1 rounded font-mono">{section.section_key}</span>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label>Content</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
        </div>

        <Button
          onClick={() => onSave({ title, content })}
          disabled={saving}
          size="sm"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AboutEditor;
