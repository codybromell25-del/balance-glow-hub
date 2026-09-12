import { useState, useEffect } from "react";
import { X, CalendarDays, Clock, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import studioLimerick from "@/assets/limerick-studio-4.jpg";

const EVENT_POPUP_KEY = "balance-little-more-balance-popup-dismissed";

const EventPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(EVENT_POPUP_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(EVENT_POPUP_KEY, "true");
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent
        className="max-w-3xl w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto p-0 rounded-[2rem] md:rounded-[2.5rem] border border-border/50 bg-background shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        aria-describedby="event-popup-description"
      >
        <DialogTitle className="sr-only">
          A Little More balance — Special Event Invitation
        </DialogTitle>
        <DialogDescription id="event-popup-description" className="sr-only">
          Join us on Sunday 27 September at balance Limerick for an afternoon of
          movement, conversation and practical ideas. €55 per person.
        </DialogDescription>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors border border-border/30"
          aria-label="Close event invitation"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-5/12 relative min-h-[280px] md:min-h-[420px] overflow-hidden">
            <img
              src={studioLimerick}
              alt="balance Limerick studio entrance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white z-10">
              <p className="text-[10px] tracking-[0.4em] uppercase font-medium text-white/90 mb-1">
                balance Limerick
              </p>
              <p className="font-heading italic text-lg md:text-xl">
                Special Event
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-background relative">
            <div className="space-y-6 w-full">
              <header className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-border" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Special Invitation
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05] tracking-tight">
                  A Little More{" "}
                  <span className="italic block mt-1">balance.</span>
                </h2>
              </header>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={15} className="text-sage" />
                  Sunday 27 September
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-sage" />
                  1.00–2.30pm
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-sage" />
                  balance Limerick
                </span>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                A relaxed afternoon of movement, conversation and practical
                ideas for everyday life. Includes Reformer & Mat Pilates, a talk
                with Elva O’Conaire, refreshments, a goodie bag and spot prizes.
              </p>

              <p className="text-2xl font-heading italic text-foreground">
                €55 per person
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/a-little-more-balance"
                  onClick={handleClose}
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-sage text-sage-foreground text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-sage/90 rounded-full overflow-hidden shadow-lg"
                >
                  <span className="relative z-10">Explore Event</span>
                </a>
                <button
                  onClick={handleClose}
                  className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventPopup;
