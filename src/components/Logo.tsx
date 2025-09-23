
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative w-14 h-14 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent group-hover:from-primary/90 group-hover:to-accent/90 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Stylized river and mountain logo */}
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg">
            {/* Temple/Heritage Architecture */}
            <path d="M4 20H20V16L12 8L4 16V20Z" fill="#e0f2f1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Temple spire */}
            <path d="M12 8L10 6L12 4L14 6L12 8Z" fill="#e0f2f1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* River/Water */}
            <path d="M2 20C4 18 6 20 8 18C10 16 12 18 14 16C16 14 18 16 20 14" stroke="#bbdefb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Sun */}
            <circle cx="18" cy="6" r="2" fill="#ffeb3b" stroke="currentColor" strokeWidth="0.5"/>
            {/* Sacred flame/diya */}
            <circle cx="12" cy="14" r="1" fill="#ff9800" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-display font-bold text-primary leading-tight group-hover:text-primary/80 transition-colors duration-300">
          दंतेवाड़ा
        </span>
        <span className="text-base font-medium text-accent group-hover:text-accent/80 transition-colors duration-300">
          पर्यटन
        </span>
      </div>
    </Link>
  );
};

export default Logo;
