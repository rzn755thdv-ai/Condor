import { Mail } from 'lucide-react';

export function Contact() {
  const handleEmail = () => {
    window.location.href = 'mailto:john@condorconsulting.org';
  };

  return (
    <section className="relative py-32 px-6 lg:px-8 border-t-2 border-border/30 overflow-hidden">
      {/* Hexagonal Texture Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(183, 32, 32, 0.3) 20px, rgba(183, 32, 32, 0.3) 21px),
            repeating-linear-gradient(-60deg, transparent, transparent 20px, rgba(183, 32, 32, 0.3) 20px, rgba(183, 32, 32, 0.3) 21px)
          `
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="h-[3px] w-16 bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Connect
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Start a conversation about your organization's strategic priorities.
            </p>
          </div>

          {/* Leadership Card */}
          <div className="relative border-2 border-border/50 p-8 lg:p-12 space-y-8 max-w-3xl">
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-transparent to-transparent" />

            {/* Bio */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2">
                  Leadership
                </h3>
                <p className="text-lg font-medium tracking-tight mb-1">
                  John Patrick Diaz
                </p>
                <p className="text-sm text-primary uppercase tracking-wider mb-4">
                  Managing Director, Strategic Advisory
                </p>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Condor leadership brings experience in public sector strategy, regulatory compliance, 
                and operational execution across defense, intelligence, and civilian agencies.
              </p>

              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p>• Service-Disabled Veteran-Owned Small Business</p>
                <p>• Cleared personnel available</p>
                <p>• Government contracting eligible</p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-primary" />
          </div>

          {/* Email Contact Button */}
          <div className="max-w-3xl">
            <button 
              onClick={handleEmail}
              className="w-full flex items-center gap-4 px-6 py-4 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-base font-medium">Email</span>
              <span className="ml-auto text-sm text-muted-foreground">john@condorconsulting.org</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
