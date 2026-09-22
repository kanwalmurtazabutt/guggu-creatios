interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', showSubtitle = true, className = '', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#FFFDF9]' : 'text-[#292824]';
  const subColor = isLight ? 'text-[#B8AA99]' : 'text-[#57554E]';
  const strokeColor = isLight ? '#FFFDF9' : variant === 'gold' ? '#C9AE7A' : '#292824';
  const accentColor = '#C9AE7A';
  const leafColor = '#A8B39F';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`} id="brand-logo">
      {/* Minimalist Line-Art Emblem: Open Book + Heart Spine + Botanical Leaf */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Subtle warm base disc */}
          <circle cx="20" cy="20" r="19" fill={isLight ? 'rgba(255,255,255,0.06)' : '#F2ECE2'} stroke={isLight ? 'rgba(255,255,255,0.15)' : '#E8E2DA'} strokeWidth="1" />
          
          {/* Open Book Wings */}
          <path
            d="M9 28C13 27.5 17 25.5 20 23.5C23 25.5 27 27.5 31 28V15.5C27 15 23 13 20 11C17 13 13 15 9 15.5V28Z"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Book Spine & Subtle Heart Notch */}
          <path
            d="M20 11V23.5"
            stroke={strokeColor}
            strokeWidth="1.35"
            strokeLinecap="round"
          />

          {/* Delicate Mini Heart Nestled at the Center Crease */}
          <path
            d="M20 17.2C19.3 16.3 18.2 16.3 17.6 17C16.9 17.8 17 18.9 20 20.8C23 18.9 23.1 17.8 22.4 17C21.8 16.3 20.7 16.3 20 17.2Z"
            fill={accentColor}
            opacity="0.9"
          />

          {/* Graceful Botanical Leaf Sprouting Elegantly from the Crest */}
          <path
            d="M20 11C20.8 8.5 23 7.2 24.5 7.5C24.8 9.5 23.2 11.2 20 11Z"
            fill={leafColor}
          />
          <path
            d="M19.5 11C18.2 9.2 16.5 8.5 15.2 8.8C15 10.4 16.3 11.8 19.5 11Z"
            fill={leafColor}
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Brand Title & Typographic Hierarchy */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif font-medium tracking-tight ${titleSizes[size]} ${textColor} transition-colors`}
        >
          Guggu Creations
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase tracking-[0.16em] text-[9px] sm:text-[10px] mt-0.5 ${subColor}`}
          >
            Publishing & Design Studio
          </span>
        )}
      </div>
    </div>
  );
}
