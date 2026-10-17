import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', compact = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon SVG: Mountain peaks with swooping airplane trail */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-0.5 shadow-lg shadow-emerald-950/40 border border-emerald-500/30 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Primary & Secondary Mountain Peaks */}
          <path
            d="M12 78 L38 34 L56 62 L68 44 L90 78 Z"
            fill="url(#mountainGrad)"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Snowcaps on peaks */}
          <path
            d="M38 34 L31 46 L38 43 L45 46 Z"
            fill="#ffffff"
          />
          <path
            d="M68 44 L63 53 L68 51 L74 53 Z"
            fill="#ffffff"
          />
          {/* Valley swoosh lines */}
          <path
            d="M8 82 Q50 68 92 82"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Dynamic Flight Arch */}
          <path
            d="M10 70 Q40 18 78 22"
            stroke="#fbbf24"
            strokeWidth="2.5"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />
          {/* Airplane Silhouette */}
          <g transform="translate(76, 17) rotate(15)">
            <path
              d="M0 6 L8 4 L14 0 L15 2 L11 5 L17 7 L17 9 L11 8 L10 12 L7 10 L8 8 L0 7 Z"
              fill="#fbbf24"
            />
          </g>

          <defs>
            <linearGradient id="mountainGrad" x1="50" y1="34" x2="50" y2="78" gradientUnits="userSpaceOnUse">
              <stop stopColor="#047857" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name & Parent Organization text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-extrabold tracking-tight text-sm sm:text-base leading-tight ${
              variant === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Tour and Travel Ventures
          </span>
        </div>
        {!compact && (
          <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-emerald-400">
            A Project of Kiswah Business Solution
          </span>
        )}
      </div>
    </div>
  );
};
