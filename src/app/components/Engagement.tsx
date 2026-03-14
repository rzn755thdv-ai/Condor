import { ArrowRight } from 'lucide-react';

const steps = [
  { number: '01', title: 'Assess', description: 'Understand context and strategic priorities' },
  { number: '02', title: 'Structure', description: 'Design frameworks and execution plans' },
  { number: '03', title: 'Execute', description: 'Deliver operational outcomes' }
];

export function Engagement() {
  return (
    <section className="relative py-32 px-6 lg:px-8 border-t-2 border-border/30 overflow-hidden">
      {/* Cross Hatch Texture Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(183, 32, 32, 0.3) 15px, rgba(183, 32, 32, 0.3) 16px),
            repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(183, 32, 32, 0.3) 15px, rgba(183, 32, 32, 0.3) 16px)
          `
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="h-[3px] w-16 bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">How We Work</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
              Condor operates as a strategic advisory partner capable of supporting institutions from
              early-stage strategy through operational execution.
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-border/30 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative h-full">
                  <div
                    className="relative border-2 border-border/50 p-8 bg-background hover:border-primary/50 transition-all duration-300 group"
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-primary/30 mb-6 group-hover:border-primary transition-colors">
                      <span className="text-2xl font-semibold text-primary">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    {/* Top Accent */}
                    <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
                  </div>

                  {/* Arrow Between Steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-background flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
