const SocialProofBar = () => {
  const stats = [
    { value: "6", label: "Boutique Studios" },
    { value: "10,000", suffix: "+", label: "Classes Taught" },
    { value: "4.9", label: "Google Rating", suffix: "★" },
  ];

  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="border-t border-b border-foreground/8 py-6 md:py-8">
          <div className="grid grid-cols-3 gap-6 md:gap-0 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-4 md:px-10 ${
                  index !== stats.length - 1 ? "border-r border-foreground/8" : ""
                }`}
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="font-heading font-normal text-2xl md:text-3xl text-foreground tracking-tight leading-none">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="font-heading text-sm text-foreground/30 leading-none">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-foreground/40 font-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
