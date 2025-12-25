const CelestialBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-primary/[0.08] animate-spin-very-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full border border-foreground/[0.05] animate-spin-reverse-slow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border border-primary/[0.06]" />
      </div>

      {/* Saturn-like planet - top right */}
      <div className="absolute top-[10%] right-[8%] opacity-40">
        <svg width="80" height="50" viewBox="0 0 80 50" className="text-primary">
          <ellipse cx="40" cy="25" rx="38" ry="8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
          <circle cx="40" cy="25" r="12" fill="currentColor" opacity="0.8" />
          <ellipse cx="40" cy="25" rx="38" ry="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" 
            strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Crescent moon - top left */}
      <div className="absolute top-[12%] left-[10%] opacity-30">
        <svg width="45" height="45" viewBox="0 0 45 45" className="text-foreground">
          <path d="M 25 5 A 17 17 0 1 1 25 40 A 12 12 0 1 0 25 5" fill="currentColor" />
        </svg>
      </div>

      {/* Constellation pattern - left side */}
      <div className="absolute top-[30%] left-[5%] opacity-25">
        <svg width="100" height="120" viewBox="0 0 100 120" className="text-foreground">
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="50" cy="35" r="1.5" fill="currentColor" />
          <circle cx="30" cy="60" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="1.5" fill="currentColor" />
          <circle cx="45" cy="100" r="2" fill="currentColor" />
          <line x1="20" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="50" y1="35" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="30" y1="60" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="70" y1="70" x2="45" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Constellation pattern - right side */}
      <div className="absolute top-[45%] right-[5%] opacity-20">
        <svg width="80" height="100" viewBox="0 0 80 100" className="text-primary">
          <circle cx="40" cy="10" r="1.5" fill="currentColor" />
          <circle cx="15" cy="40" r="2" fill="currentColor" />
          <circle cx="65" cy="35" r="1.5" fill="currentColor" />
          <circle cx="30" cy="70" r="2" fill="currentColor" />
          <circle cx="60" cy="85" r="1.5" fill="currentColor" />
          <line x1="40" y1="10" x2="15" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="40" y1="10" x2="65" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="15" y1="40" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="65" y1="35" x2="60" y2="85" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Sun burst - bottom left */}
      <div className="absolute bottom-[15%] left-[8%] opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary">
          <circle cx="30" cy="30" r="8" fill="currentColor" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="30"
              y1="30"
              x2={30 + Math.cos((i * Math.PI) / 4) * 25}
              y2={30 + Math.sin((i * Math.PI) / 4) * 25}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* Orbit with planet - bottom right */}
      <div className="absolute bottom-[20%] right-[10%] opacity-30">
        <svg width="70" height="70" viewBox="0 0 70 70" className="text-foreground">
          <circle cx="35" cy="35" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="35" cy="35" r="4" fill="hsl(var(--primary))" opacity="0.8" />
          <circle cx="58" cy="28" r="3" fill="currentColor" className="animate-orbit-dot" />
        </svg>
      </div>

      {/* Star clusters */}
      <div className="absolute top-[20%] right-[25%] opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-foreground">
          <polygon points="20,2 23,15 36,15 25,23 29,36 20,28 11,36 15,23 4,15 17,15" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-[35%] left-[20%] opacity-20">
        <svg width="25" height="25" viewBox="0 0 25 25" className="text-primary">
          <polygon points="12.5,1 15,10 24,10 17,15 19,24 12.5,19 6,24 8,15 1,10 10,10" fill="currentColor" />
        </svg>
      </div>

      {/* Distant galaxies/nebulae */}
      <div className="absolute top-[60%] left-[15%] w-32 h-16 opacity-10">
        <div className="w-full h-full bg-gradient-radial from-primary/40 via-primary/10 to-transparent rounded-full blur-xl rotate-45" />
      </div>

      <div className="absolute top-[25%] right-[20%] w-24 h-12 opacity-10">
        <div className="w-full h-full bg-gradient-radial from-foreground/30 via-foreground/5 to-transparent rounded-full blur-lg -rotate-12" />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-twinkle"
          style={{
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 11) % 90}%`,
            backgroundColor: i % 3 === 0 ? 'hsl(var(--primary) / 0.5)' : 'hsl(var(--foreground) / 0.3)',
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Shooting star */}
      <div className="absolute top-[15%] left-[30%] opacity-40">
        <div className="w-20 h-[1px] bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent rotate-[35deg] animate-shooting-star" />
      </div>
    </div>
  );
};

export default CelestialBackground;
