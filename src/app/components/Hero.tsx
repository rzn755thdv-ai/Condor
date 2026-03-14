import condorLogo from '../../../logo.png';
import heroBg from '../../../Hero.png';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/80" />
      </div>

      {/* Abstract Corner Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full border-t-[3px] border-r-[3px] border-primary" />
        <div className="absolute top-20 right-20 w-64 h-64 border-t-[3px] border-r-[3px] border-primary" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center font-bold">
        <div className="space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={condorLogo} 
              alt="Condor Consulting Group" 
              className="w-48 md:w-64 h-auto"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/90 tracking-wide italic">
              Adaptive Solutions for the Modern World
            </p>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Strategy. Compliance. Operations. Contract Delivery.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Delivering solutions for institutions operating in complex environments.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base tracking-wide min-w-[200px] border-2 border-primary">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
