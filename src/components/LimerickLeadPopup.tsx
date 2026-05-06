import { useCallback, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MOMENCE_SCRIPT_ID = "momence-plugin-lead-form-src";
const MOMENCE_STYLE_ID = "momence-plugin-lead-form-style";

const LimerickLeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [formInstance, setFormInstance] = useState(0);

  const openLeadForm = useCallback(() => {
    setFormInstance((current) => current + 1);
    setOpen(true);
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      openLeadForm();
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const timer = window.setTimeout(openLeadForm, 3000);

    window.addEventListener("open-limerick-lead-popup", openLeadForm);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("open-limerick-lead-popup", openLeadForm);
    };
  }, [openLeadForm]);

  useEffect(() => {
    if (!open || typeof document === "undefined") {
      return;
    }

    const existingStyle = document.getElementById(MOMENCE_STYLE_ID);

    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = MOMENCE_STYLE_ID;
      style.textContent = `
        :root {
          --momenceColorBackground: #FBFBFB;
          --momenceColorPrimary: 163, 193, 173;
          --momenceColorBlack: 3, 1, 13;
        }
      `;
      document.head.appendChild(style);
    }

    document.getElementById(MOMENCE_SCRIPT_ID)?.remove();

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
    script.setAttribute("data-on-success-msg", "Excited to see you soon!");
    script.src = `https://momence.com/plugin/lead-form/lead-form.js?instance=${formInstance}`;

    document.body.appendChild(script);
    return () => {
      document.getElementById(MOMENCE_SCRIPT_ID)?.remove();
    };
  }, [open, formInstance]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl border-border/60 bg-background/95 p-0 sm:rounded-3xl">
        <div className="space-y-6 p-6 sm:p-8">
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="font-heading text-3xl font-medium tracking-tight text-foreground">
              Be the first to find out!
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              Sign up to be the first to know when we launch and have access to exclusive intro offers
            </DialogDescription>
          </DialogHeader>

          <div
            className="min-h-[320px] rounded-2xl border border-border/60 bg-card p-4 sm:p-6"
            aria-live="polite"
          >
            <div key={formInstance} id="momence-plugin-lead-form" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LimerickLeadPopup;
