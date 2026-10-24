export type CommunityEvent = { name: string; date: string; locations: string[]; category: "pop-up" | "holiday" | "treat"; description: string; bookingLink?: string };
const threeStudios = ["Clane", "Kildare Town", "Blessington"];
const allStudios = ["Limerick", "Clane", "Kildare Town", "Blessington", "Enfield", "Bray"];
export const communityEvents: CommunityEvent[] = [
  { name: "Boo at balance", date: "2026-10-30", locations: ["Clane", "Kildare Town"], category: "treat", description: "Your regular Reformer class, with a spooky little twist. Halloween tunes, a fun atmosphere and a pair of cute Halloween socks for everyone, on us. Book with your usual class pass or membership." },
  { name: "Barre X Reformer", date: "2026-11-14", locations: ["Clane", "Kildare Town"], category: "pop-up", description: "Two favourites, one class. Half Barre, half Reformer, with plenty of pulses, a little leg shake and small treats for everyone. Grab a friend and enjoy the best of both." },
  { name: "Movember", date: "2026-11-15", locations: allStudios, category: "holiday", description: "Bring a man in your life along for free and show him what Reformer is all about. A feel-good class with good company, a fun atmosphere and plenty to get you both working." },
  { name: "Sunday Reset", date: "2027-01-17", locations: threeStudios, category: "pop-up", description: "Christmas is done. Your turn. Enjoy a feel-good Reformer class followed by essential oils, eye masks and a guided meditation. A little time to switch off and leave feeling like you’ve finally had a minute to yourself." },
  { name: "Valentine’s Day", date: "2027-02-14", locations: allStudios, category: "holiday", description: "Your favourite class with your favourite person. Bring your partner, best friend or someone you love for free. A little Reformer, plenty of fun and time together that beats another box of chocolates." },
  { name: "Throwback Class", date: "2027-02-19", locations: threeStudios, category: "pop-up", description: "Which decade has the best tunes? You decide. Vote in our poll on social media and the winning decade will become our class playlist. We’ll bring the Reformers, disco balls and funky vibes." },
  { name: "Mother’s Day", date: "2027-03-07", locations: allStudios, category: "holiday", description: "A little time together and a little time for yourselves. Bring your mum, a mother figure or someone special for free and enjoy a feel-good Reformer class together. A lovely way to share something you love." },
  { name: "Strong & Socials", date: "2027-04-23", locations: threeStudios, category: "pop-up", description: "Come for the Reformer and stay for the company. Enjoy a strength-based class followed by nibbles, drinks and a proper catch-up. Bring a friend or come on your own and get to know those familiar studio faces." },
  { name: "Pilates Day", date: "2027-05-01", locations: allStudios, category: "holiday", description: "Love your Reformer classes? Share the feeling. Celebrate Pilates Day by bringing a friend for free. Good tunes, good company and a chance to show them why you keep coming back." },
  { name: "Father’s Day", date: "2027-06-20", locations: allStudios, category: "holiday", description: "Time to let Dad see what all the fuss is about. Bring your dad, a father figure or someone special for free. Expect a fun Reformer class and a shared experience to remember." },
  { name: "International Day of Friendship", date: "2027-07-30", locations: allStudios, category: "holiday", description: "The group chat can wait. Bring your friend for free and spend some time together on the Reformers. A feel-good class, a few laughs and a proper reason to get that catch-up in the diary." },
];
export function eventPrice(category: CommunityEvent["category"], isMember = false) {
  if (category === "treat") return null;
  return category === "pop-up" && isMember ? 20.4 : 24;
}
export function eventDate(date: string) {
  return new Intl.DateTimeFormat("en-IE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}