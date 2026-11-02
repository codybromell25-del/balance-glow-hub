export type MembershipFaq = { q: string; a: string };
export type MembershipFaqGroup = { category: string; intro?: string; questions: MembershipFaq[] };

export const membershipFaqs: MembershipFaqGroup[] = [
  {
    category: "Your membership",
    intro: "How signing up, renewing and the new tiers actually work.",
    questions: [
      {
        q: "How does my monthly membership renew?",
        a: "Your membership renews automatically each month on the date you signed up, with your new class credits added from that payment date.",
      },
      {
        q: "Do I have to attend the same class every week?",
        a: "No. You choose the classes and times that suit you each month, so your routine can fit around your life.",
      },
      {
        q: "I already have a membership. Do I get the new benefits?",
        a: "Yes. Our existing members receive the new benefits too.",
      },
      {
        q: "Why have the prices changed?",
        a: "We've introduced a tiered membership system to reward consistency. The more classes included in your membership, the less you pay per class.",
      },
    ],
  },
  {
    category: "Classes & credits",
    intro: "Where your credits go, and where you can use them.",
    questions: [
      {
        q: "What happens if I don't use all my classes?",
        a: "All unused credits on our 4, 8 and 12-class memberships roll over into the following month, giving you an extra month to use them before they expire.",
      },
      {
        q: "Can I use my membership at different studios?",
        a: "Yes. Your membership can be used across all six balance locations for the class types included in your plan.",
      },
    ],
  },
  {
    category: "On demand",
    intro: "Short mat pilates sessions, included with your membership.",
    questions: [
      {
        q: "How do I access the on-demand Pilates videos?",
        a: "Click the 'On Demand' tab in the balance app, or open them from the on demand page on our website. Access is included free with your membership.",
      },
      {
        q: "Are the on-demand videos full-length classes?",
        a: "They're shorter Mat Pilates sessions, ideal for busy days or a little extra Pilates between studio visits.",
      },
    ],
  },
  {
    category: "Extras & gifts",
    intro: "The little things that come with being a member.",
    questions: [
      {
        q: "What extras do I get as a member?",
        a: "You'll receive early booking access to our pop-up classes, a member discount on pop-ups, free access to our short on-demand Mat Pilates videos, and little loyalty surprises along the way.",
      },
      {
        q: "Is there a joining gift?",
        a: "Yes. All new memberships purchased in November come with a complimentary balance tote bag.",
      },
    ],
  },
  {
    category: "Cancelling & freezing",
    intro: "No lock-ins, and a plan for the months life gets busy.",
    questions: [
      {
        q: "How do I cancel my membership?",
        a: "You can cancel through your account in the balance app or on our website, or email us at info@balancestudios.ie. There's no notice period — just cancel before your next payment is due.",
      },
      {
        q: "Can I freeze my membership if I'm going away?",
        a: "Yes. Email us at info@balancestudios.ie and we'll help arrange a membership freeze.",
      },
    ],
  },
];

export const membershipFaqCount = membershipFaqs.reduce(
  (total, group) => total + group.questions.length,
  0,
);
