"use client"
import React from 'react';

interface CircuitBackgroundProps {
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: 'blue' | 'purple' | 'cyan' | 'multi';
}

const CircuitBackground: React.FC<CircuitBackgroundProps> = ({ 
  intensity = 'subtle',
  color = 'blue' 
}) => {
  // Opacity settings based on intensity
  const opacityMap = {
    subtle: 'opacity-10',
    medium: 'opacity-20', 
    strong: 'opacity-30'
  };

  // Color settings
  const colorMap = {
    blue: {
      primary: '#3b82f6',
      secondary: '#1d4ed8',
      accent: '#60a5fa'
    },
    purple: {
      primary: '#8b5cf6',
      secondary: '#7c3aed', 
      accent: '#a78bfa'
    },
    cyan: {
      primary: '#06b6d4',
      secondary: '#0891b2',
      accent: '#67e8f9'
    },
    multi: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#06b6d4'
    }
  };

  const colors = colorMap[color];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Simple Circuit Lines */}
      <div className={`absolute inset-0 ${opacityMap[intensity]}`}>
        {/* Horizontal traveling lines */}
        <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent text-blue-400">
          <div 
            className="w-2 h-2 bg-current rounded-full absolute -top-0.5 animate-pulse"
            style={{
              animation: 'travel-right 12s linear infinite'
            }}
          />
        </div>
        
        <div className="absolute top-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent text-purple-400">
          <div 
            className="w-2 h-2 bg-current rounded-full absolute -top-0.5"
            style={{
              animation: 'travel-right 15s linear infinite 3s'
            }}
          />
        </div>
        
        <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent text-cyan-400">
          <div 
            className="w-2 h-2 bg-current rounded-full absolute -top-0.5"
            style={{
              animation: 'travel-right 18s linear infinite 6s'
            }}
          />
        </div>

        {/* Vertical traveling lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-current to-transparent text-green-400">
          <div 
            className="w-2 h-2 bg-current rounded-full absolute -left-0.5"
            style={{
              animation: 'travel-down 10s linear infinite 2s'
            }}
          />
        </div>
        
        <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-current to-transparent text-yellow-400">
          <div 
            className="w-2 h-2 bg-current rounded-full absolute -left-0.5"
            style={{
              animation: 'travel-down 14s linear infinite 5s'
            }}
          />
        </div>
      </div>

      {/* Circuit Grid Pattern */}
      <div className={`absolute inset-0 ${opacityMap[intensity]}`}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, ${colors.primary}40 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Complex Circuit Paths (SVG) */}
      <div className={`absolute inset-0 ${opacityMap[intensity]}`}>
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Main circuit paths */}
          <path 
            d="M0,200 Q300,200 400,150 T800,180 L1200,180" 
            fill="none" 
            stroke={colors.primary}
            strokeWidth="1"
            opacity="0.6"
          >
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite"/>
          </path>
          
          <path 
            d="M200,0 Q200,300 350,400 T600,450 L600,800" 
            fill="none" 
            stroke={colors.secondary}
            strokeWidth="1"
            opacity="0.6"
          >
            <animate attributeName="stroke-dasharray" values="0,800;800,0;0,800" dur="10s" repeatCount="indefinite" begin="2s"/>
          </path>

          {/* Connection nodes */}
          <circle cx="400" cy="150" r="3" fill={colors.primary} opacity="0.8">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="800" cy="180" r="3" fill={colors.accent} opacity="0.8">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="350" cy="400" r="3" fill={colors.secondary} opacity="0.8">
            <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="2s"/>
          </circle>

          {/* Data packets traveling along paths */}
          <circle r="4" fill={colors.accent} opacity="0.9">
            <animateMotion dur="12s" repeatCount="indefinite">
              <path d="M0,200 Q300,200 400,150 T800,180 L1200,180"/>
            </animateMotion>
          </circle>
          
          <circle r="3" fill={colors.primary} opacity="0.7">
            <animateMotion dur="15s" repeatCount="indefinite" begin="4s">
              <path d="M200,0 Q200,300 350,400 T600,450 L600,800"/>
            </animateMotion>
          </circle>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes travel-right {
          0% {
            left: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: calc(100% + 10px);
            opacity: 0;
          }
        }
        
        @keyframes travel-down {
          0% {
            top: -10px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            top: calc(100% + 10px);
            opacity: 0;
          }
        }
        
        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default CircuitBackground;