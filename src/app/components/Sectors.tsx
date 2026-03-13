const sectors = [
  'Government',
  'Education',
  'Healthcare',
  'Mission-Driven Organizations'
];

export function Sectors() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Dot Matrix Texture Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(183, 32, 32, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div>
            <div className="h-[3px] w-16 bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Sectors Served
            </h2>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="group relative border-2 border-border/50 p-8 hover:border-primary/50 transition-all duration-300"
              >
                {/* Left Accent */}
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-primary group-hover:h-full transition-all duration-500" />
                
                <p className="text-xl md:text-2xl font-medium tracking-wide">
                  {sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}