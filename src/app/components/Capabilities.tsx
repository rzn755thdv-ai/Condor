import { Target, Shield, Lightbulb } from 'lucide-react';

const capabilities = [
  {
    icon: Target,
    title: 'Operational Strategy',
    description: 'Supporting agencies and organizations in modernizing programs, improving decision-making, and executing complex initiatives.'
  },
  {
    icon: Shield,
    title: 'Regulatory & Compliance Advisory',
    description: 'Audit readiness, regulatory alignment, governance frameworks, and risk-informed operational planning.'
  },
  {
    icon: Lightbulb,
    title: 'Public Sector Innovation',
    description: 'AI governance, data strategy, and operational intelligence capabilities for modern institutions.'
  }
];

export function Capabilities() {
  return (
    <section className="relative py-32 px-6 lg:px-8 border-t-2 border-border/30 overflow-hidden">
      {/* Diagonal Lines Texture Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(183, 32, 32, 0.4) 35px,
            rgba(183, 32, 32, 0.4) 37px
          )`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="h-[3px] w-16 bg-primary mb-8" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Core Capabilities
          </h2>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative border-2 border-border/50 p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 delay-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}