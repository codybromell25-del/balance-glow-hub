import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MOMENCE_SCRIPT_ID = "momence-plugin-lead-form-src";
const MOMENCE_CONTAINER_ID = "momence-plugin-lead-form";

const LimerickLeadPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || typeof document === "undefined") {
      return;
    }

    const existingScript = document.getElementById(MOMENCE_SCRIPT_ID);

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.id = MOMENCE_SCRIPT_ID;
    script.setAttribute("host_id", "62930");
    script.setAttribute("fields", "firstName,lastName,email,phoneNumber");
    script.setAttribute("token", "WZ8Ypl57Dd");
    script.setAttribute("country_code", "ie");
    script.setAttribute(
      "data-field-def",
      JSON.stringify({
        firstName: { type: "text", label: "First name", required: true },
        lastName: { type: "text", label: "Last name", required: true },
        email: { type: "email", label: "Email", required: true },
        phoneNumber: { type: "phone-number", label: "Phone number", required: true },
      }),
    );
    script.src = "https://momence.com/plugin/lead-form/lead-form.js";

    document.body.appendChild(script);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl border-border/60 bg-background/95 p-0 sm:rounded-3xl">
        <div className="space-y-6 p-6 sm:p-8">
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="font-heading text-3xl font-medium tracking-tight text-foreground">
              Be the first to find out!
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              Join the Limerick waitlist for launch updates, early access, and first news from the new studio.
            </DialogDescription>
          </DialogHeader>

          <div
            className="min-h-[320px] rounded-2xl border border-border/60 bg-card p-4 sm:p-6"
            aria-live="polite"
          >
            <div id={MOMENCE_CONTAINER_ID} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LimerickLeadPopup;
