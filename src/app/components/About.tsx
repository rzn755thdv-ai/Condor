export function About() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Geometric Texture Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(183, 32, 32, 0.3) 25%, rgba(183, 32, 32, 0.3) 26%, transparent 27%, transparent 74%, rgba(183, 32, 32, 0.3) 75%, rgba(183, 32, 32, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(183, 32, 32, 0.3) 25%, rgba(183, 32, 32, 0.3) 26%, transparent 27%, transparent 74%, rgba(183, 32, 32, 0.3) 75%, rgba(183, 32, 32, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Headline */}
          <div className="space-y-6">
            <div className="h-[3px] w-16 bg-primary mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Strategic Advisory for Complex Environments
            </h2>
          </div>

          {/* Body Copy */}
          <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
            <p>
              Condor Consulting Group supports public institutions, mission-driven organizations, and private partners operating in complex regulatory environments.
            </p>
            <p>
              We translate strategy into execution, helping organizations navigate regulatory frameworks, modernize operations, and responsibly deploy emerging capabilities including data and artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Accent Element */}
      <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-primary to-transparent opacity-50" />
    </section>
  );
}