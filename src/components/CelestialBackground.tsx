const CelestialBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large orbital rings with glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border-2 border-primary/20 animate-spin-very-slow shadow-[0_0_30px_hsl(var(--primary)/0.15)]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full border border-foreground/10 animate-spin-reverse-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border border-primary/15 animate-pulse-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full border border-foreground/8 animate-spin-very-slow" style={{ animationDuration: '60s' }} />
      </div>

      {/* Saturn-like planet - top right */}
      <div className="absolute top-[10%] right-[8%] opacity-60 animate-float">
        <svg width="100" height="60" viewBox="0 0 100 60" className="text-primary">
          <ellipse cx="50" cy="30" rx="45" ry="10" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
          <circle cx="50" cy="30" r="15" fill="currentColor" opacity="0.9" />
          <ellipse cx="50" cy="30" rx="48" ry="12" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" 
            strokeDasharray="3 5" className="animate-spin-very-slow" style={{ transformOrigin: 'center' }} />
        </svg>
      </div>

      {/* Crescent moon - top left */}
      <div className="absolute top-[12%] left-[10%] opacity-50 animate-float-delayed">
        <svg width="55" height="55" viewBox="0 0 55 55" className="text-foreground">
          <defs>
            <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M 28 5 A 20 20 0 1 1 28 50 A 14 14 0 1 0 28 5" fill="currentColor" filter="url(#moonGlow)" />
        </svg>
      </div>

      {/* Constellation pattern - left side */}
      <div className="absolute top-[30%] left-[5%] opacity-40">
        <svg width="120" height="150" viewBox="0 0 120 150" className="text-foreground">
          <circle cx="25" cy="25" r="3" fill="currentColor" className="animate-twinkle" />
          <circle cx="60" cy="45" r="2.5" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '0.5s' }} />
          <circle cx="35" cy="75" r="3" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '1s' }} />
          <circle cx="85" cy="85" r="2.5" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '1.5s' }} />
          <circle cx="55" cy="125" r="3" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '2s' }} />
          <line x1="25" y1="25" x2="60" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <line x1="60" y1="45" x2="35" y2="75" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <line x1="35" y1="75" x2="85" y2="85" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <line x1="85" y1="85" x2="55" y2="125" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* Constellation pattern - right side */}
      <div className="absolute top-[45%] right-[5%] opacity-35">
        <svg width="100" height="130" viewBox="0 0 100 130" className="text-primary">
          <circle cx="50" cy="15" r="2.5" fill="currentColor" className="animate-twinkle" />
          <circle cx="18" cy="50" r="3" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '0.3s' }} />
          <circle cx="80" cy="45" r="2.5" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '0.7s' }} />
          <circle cx="38" cy="90" r="3" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '1.2s' }} />
          <circle cx="75" cy="110" r="2.5" fill="currentColor" className="animate-twinkle" style={{ animationDelay: '1.6s' }} />
          <line x1="50" y1="15" x2="18" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <line x1="50" y1="15" x2="80" y2="45" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <line x1="18" y1="50" x2="38" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <line x1="80" y1="45" x2="75" y2="110" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* Sun burst - bottom left with animation */}
      <div className="absolute bottom-[15%] left-[8%] opacity-35 animate-pulse-slow">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary">
          <defs>
            <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="40" cy="40" r="12" fill="currentColor" filter="url(#sunGlow)" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="40"
              y1="40"
              x2={40 + Math.cos((i * Math.PI) / 6) * 32}
              y2={40 + Math.sin((i * Math.PI) / 6) * 32}
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.7"
            />
          ))}
        </svg>
      </div>

      {/* Orbit with planet - bottom right */}
      <div className="absolute bottom-[20%] right-[10%] opacity-45">
        <svg width="90" height="90" viewBox="0 0 90 90" className="text-foreground">
          <circle cx="45" cy="45" r="32" stroke="currentColor" strokeWidth="0.8" fill="none" strokeDasharray="4 4" />
          <circle cx="45" cy="45" r="6" fill="hsl(var(--primary))" opacity="0.9" className="animate-pulse-slow" />
          <circle cx="75" cy="38" r="4" fill="currentColor" className="animate-orbit" />
        </svg>
      </div>

      {/* Large star clusters */}
      <div className="absolute top-[20%] right-[25%] opacity-50 animate-twinkle">
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-foreground">
          <polygon points="25,2 29,18 45,18 32,28 37,45 25,35 13,45 18,28 5,18 21,18" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-[35%] left-[20%] opacity-35 animate-twinkle" style={{ animationDelay: '1s' }}>
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-primary">
          <polygon points="17.5,1 21,14 34,14 24,21 27,34 17.5,26 8,34 11,21 1,14 14,14" fill="currentColor" />
        </svg>
      </div>

      {/* Additional small stars */}
      <div className="absolute top-[55%] left-[35%] opacity-30 animate-twinkle" style={{ animationDelay: '1.5s' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-foreground">
          <polygon points="10,0 12,7 20,7 14,11 16,20 10,15 4,20 6,11 0,7 8,7" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-[75%] right-[30%] opacity-25 animate-twinkle" style={{ animationDelay: '2s' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" className="text-primary">
          <polygon points="9,0 11,6 18,6 12,10 14,18 9,13 4,18 6,10 0,6 7,6" fill="currentColor" />
        </svg>
      </div>

      {/* Distant galaxies/nebulae - enhanced */}
      <div className="absolute top-[60%] left-[15%] w-40 h-20 opacity-20 animate-pulse-slow">
        <div className="w-full h-full bg-gradient-radial from-primary/50 via-primary/15 to-transparent rounded-full blur-2xl rotate-45" />
      </div>

      <div className="absolute top-[25%] right-[20%] w-32 h-16 opacity-15 animate-pulse-slow" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-radial from-foreground/40 via-foreground/10 to-transparent rounded-full blur-xl -rotate-12" />
      </div>

      <div className="absolute bottom-[40%] right-[35%] w-28 h-14 opacity-15 animate-pulse-slow" style={{ animationDelay: '3s' }}>
        <div className="w-full h-full bg-gradient-radial from-primary/35 via-primary/8 to-transparent rounded-full blur-xl rotate-30" />
      </div>

      {/* Floating particles - more particles with varied sizes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${8 + (i * 5) % 85}%`,
            left: `${3 + (i * 7) % 94}%`,
            width: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1.5px',
            height: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1.5px',
            backgroundColor: i % 3 === 0 ? 'hsl(var(--primary) / 0.7)' : 'hsl(var(--foreground) / 0.5)',
            animationDelay: `${i * 0.25}s`,
            boxShadow: i % 4 === 0 ? '0 0 6px hsl(var(--primary) / 0.4)' : 'none',
          }}
        />
      ))}

      {/* Multiple shooting stars */}
      <div className="absolute top-[15%] left-[30%] opacity-60">
        <div className="w-24 h-[2px] bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent rotate-[35deg] animate-shooting-star" />
      </div>

      <div className="absolute top-[35%] right-[25%] opacity-50">
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-primary/70 via-primary/20 to-transparent rotate-[40deg] animate-shooting-star" style={{ animationDelay: '5s' }} />
      </div>

      <div className="absolute top-[65%] left-[50%] opacity-40">
        <div className="w-16 h-[1px] bg-gradient-to-r from-foreground/60 via-foreground/15 to-transparent rotate-[30deg] animate-shooting-star" style={{ animationDelay: '8s' }} />
      </div>

      {/* Comet with tail */}
      <div className="absolute top-[8%] left-[60%] opacity-50 animate-comet">
        <svg width="60" height="30" viewBox="0 0 60 30" className="text-foreground">
          <defs>
            <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="8" cy="15" rx="5" ry="4" fill="currentColor" />
          <path d="M 12 15 Q 35 12, 60 15 Q 35 18, 12 15" fill="url(#cometTail)" />
        </svg>
      </div>

      {/* Planet with rings - additional */}
      <div className="absolute bottom-[10%] left-[30%] opacity-35 animate-float" style={{ animationDelay: '2s' }}>
        <svg width="50" height="35" viewBox="0 0 50 35" className="text-foreground">
          <ellipse cx="25" cy="17.5" rx="22" ry="5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5" />
          <circle cx="25" cy="17.5" r="8" fill="hsl(var(--primary))" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
};

export default CelestialBackground;
