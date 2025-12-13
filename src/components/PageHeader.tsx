interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-normal text-foreground tracking-tight leading-[0.9]">
            {title}<span className="text-primary">.</span>
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
