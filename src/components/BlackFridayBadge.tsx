// Editorial "Black Friday" marker — soft sage wash, italic serif, no hard black pill.
type Props = { className?: string; size?: "sm" | "md" };

const BlackFridayBadge = ({ className = "", size = "sm" }: Props) => {
  const dot = size === "md" ? "h-1.5 w-1.5" : "h-1 w-1";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-sage/60 bg-sage/20 text-sage-deep dark:text-sage ${
        size === "md" ? "px-4 py-2" : "px-3.5 py-1.5"
      } ${className}`}
    >
      <span aria-hidden className={`shrink-0 rounded-full bg-sage-deep dark:bg-sage ${dot}`} />
      <span
        className={`font-heading italic leading-[1.45] whitespace-nowrap ${
          size === "md" ? "text-[15px]" : "text-[13px]"
        }`}
      >
        Black Friday
      </span>
      <span aria-hidden className={`shrink-0 rounded-full bg-sage-deep dark:bg-sage ${dot}`} />
    </span>
  );
};

export default BlackFridayBadge;
