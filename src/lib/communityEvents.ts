export type CommunityEvent = { name: string; date: string; locations: string[]; category: "pop-up" | "holiday" | "treat"; description: string; time?: string; locationTimes?: Record<string, string>; duration?: string; bookingLink?: string; released: boolean };
const threeStudios = ["Clane", "Kildare Town", "Blessington"];
const allStudios = ["Limerick", "Clane", "Kildare Town", "Blessington", "Enfield", "Bray"];
export const allStudiosExceptEnfield = allStudios.filter(studio => studio !== "Enfield");
// `released: false` keeps an event in the plan without publishing it on the site.
export const communityEvents: CommunityEvent[] = [
  { name: "Boo at balance", date: "2026-10-30", locations: ["Clane", "Kildare Town"], category: "treat", description: "Your regular Reformer class, with a spooky little twist. Halloween tunes, a fun atmosphere and a pair of cute Halloween socks for everyone, on us. Book with your usual class pass or membership.", released: false },
  { name: "Reformer X Barre", date: "2026-12-13", locations: ["Clane", "Kildare Town"], category: "pop-up", description: "Half Barre, half Reformer, with treats.", locationTimes: { Clane: "2.30pm", "Kildare Town": "2pm" }, released: true },
  { name: "Movember", date: "2026-11-15", locations: allStudios, category: "holiday", description: "Bring a man in your life along for free and show him what Reformer is all about. A feel-good class with good company, a fun atmosphere and plenty to get you both working.", time: "11:00 AM", duration: "45 minutes", bookingLink: "https://momence.com/l/2Bhk27Br", released: true },
  { name: "Sunday Reset", date: "2027-01-17", locations: allStudiosExceptEnfield, category: "pop-up", description: "Christmas is done. Your turn. Enjoy a feel-good Reformer class followed by essential oils, eye masks and a guided meditation. A little time to switch off and leave feeling like you’ve finally had a minute to yourself.", released: true },
  { name: "Valentine’s Day", date: "2027-02-14", locations: allStudios, category: "holiday", description: "Your favourite class with your favourite person. Bring your partner, best friend or someone you love for free. A little Reformer, plenty of fun and time together that beats another box of chocolates.", released: true },
  { name: "Throwback Class", date: "2027-02-19", locations: allStudiosExceptEnfield, category: "pop-up", description: "Which decade has the best tunes? You decide. Vote in our poll on social media and the winning decade will become our class playlist. We’ll bring the Reformers, disco balls and funky vibes.", released: true },
  { name: "Mother’s Day", date: "2027-03-07", locations: allStudios, category: "holiday", description: "A little time together and a little time for yourselves. Bring your mum, a mother figure or someone special for free and enjoy a feel-good Reformer class together. A lovely way to share something you love.", released: true },
  { name: "Strong & Social", date: "2027-04-23", locations: threeStudios, category: "pop-up", description: "Come for the Reformer and stay for the company. Enjoy a strength-based class followed by nibbles, drinks and a proper catch-up. Bring a friend or come on your own and get to know those familiar studio faces.", released: true },
  { name: "Pilates Day", date: "2027-05-01", locations: allStudios, category: "holiday", description: "Love your Reformer classes? Share the feeling. Celebrate Pilates Day by bringing a friend for free. Good tunes, good company and a chance to show them why you keep coming back.", released: true },
  { name: "Father’s Day", date: "2027-06-20", locations: allStudios, category: "holiday", description: "Time to let Dad see what all the fuss is about. Bring your dad, a father figure or someone special for free. Expect a fun Reformer class and a shared experience to remember.", released: true },
  { name: "International Day of Friendship", date: "2027-07-30", locations: allStudios, category: "holiday", description: "The group chat can wait. Bring your friend for free and spend some time together on the Reformers. A feel-good class, a few laughs and a proper reason to get that catch-up in the diary.", released: true },
];
// Only released events reach the site.
export const publishedEvents = communityEvents.filter(e => e.released).sort((a, b) => a.date.localeCompare(b.date));
export function eventPrice(category: CommunityEvent["category"], isMember = false) {
  if (category === "treat") return null;
  return category === "pop-up" && isMember ? 20.4 : 24;
}
export function eventDate(date: string) {
  return new Intl.DateTimeFormat("en-IE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
export function eventTime(event: CommunityEvent) {
  if (event.locationTimes) return event.locations.map(location => `${location} @ ${event.locationTimes?.[location]}`.replace(/ /g, "\u00A0")).join(" · ");
  return [event.time, event.duration].filter(Boolean).join(" · ") || "Time to be confirmed";
}
export function eventLocations(event: CommunityEvent) {
  if (event.locations.length === allStudios.length) return "All six studios";
  if (event.locations.length === allStudiosExceptEnfield.length && allStudiosExceptEnfield.every(studio => event.locations.includes(studio))) return "All studios except Enfield";
  return event.locations.map(location => location.replace(/ /g, "\u00A0")).join(" · ");
}
