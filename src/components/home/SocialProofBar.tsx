const SocialProofBar = () => {
  const stats = [
    { value: "6", label: "Boutique Studios" },
    { value: "10,000+", label: "Classes Taught" },
    { value: "4.9", label: "Google Rating", suffix: "★" },
  ];

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Top hairline accent */}
        <div className="w-16 h-px bg-foreground/20 mx-auto mb-12 md:mb-16" />

        <div className="grid grid-cols-3 gap-4 md:gap-0 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-2 md:px-8 ${
                index !== stats.length - 1 ? "md:border-r border-foreground/10" : ""
              }`}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-heading font-normal text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-none">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="font-heading text-xl md:text-2xl text-foreground/40 leading-none">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="mt-4 md:mt-5 text-[9px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em] text-foreground/60 font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom hairline accent */}
        <div className="w-16 h-px bg-foreground/20 mx-auto mt-12 md:mt-16" />
      </div>
    </section>
  );
};

export default SocialProofBar;
