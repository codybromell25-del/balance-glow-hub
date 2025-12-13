interface PageHeaderProps {
  title: string;
  subtitle?: string;
}
const PageHeader = ({
  title,
  subtitle
}: PageHeaderProps) => {
  return <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {subtitle && <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>}
        </div>
      </div>
    </section>;
};
export default PageHeader;