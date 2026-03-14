import condorLogo from '../../../Logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 py-16 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img 
                  src={condorLogo} 
                  alt="Condor Consulting Group" 
                  className="w-16 h-auto"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                    Condor Consulting Group
                  </h3>
                  <p className="text-lg text-foreground/80">
                    Adaptive Solutions for the Modern World
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <span>Strategy</span>
                <span className="text-primary">•</span>
                <span>Compliance</span>
                <span className="text-primary">•</span>
                <span>Operations</span>
                <span className="text-primary">•</span>
                <span>Contract Delivery</span>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="space-y-6 md:text-right">
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Capabilities
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sectors
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Connect
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Condor Consulting Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <div className="absolute bottom-0 right-0 w-full h-px bg-primary" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-primary" />
      </div>
    </footer>
  );
}
