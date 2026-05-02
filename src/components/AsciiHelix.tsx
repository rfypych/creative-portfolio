import { useState, useEffect } from 'react';

/**
 * A rotating 3D ASCII DNA Helix.
 * Represents the "Operational Core" of the collective.
 */
export default function AsciiHelix() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderHelix = (f: number) => {
    const angle = f * 0.08;
    const width = 80;
    const height = 70;
    const b = new Array(width * height).fill(" ");
    const z = new Array(width * height).fill(-100);
    
    const chars = " .:-=+*#%@";
    const radius = 12;
    
    // Draw two strands of helix
    for (let y_pos = -18; y_pos < 18; y_pos += 0.1) {
        const theta = y_pos * 0.4 + angle;
        
        // Strand points
        const points = [
          { r: theta, label: "#" },
          { r: theta + Math.PI, label: "@" }
        ];

        points.forEach((p) => {
          const x = radius * Math.cos(p.r);
          const z_coord = radius * Math.sin(p.r);
          
          const ooz = 1 / (z_coord + 40);
          const xp = Math.floor(width / 2 + x * ooz * 90);
          const yp = Math.floor(height / 2 + y_pos * 1.5 * ooz * 40);
          
          if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
              const idx = xp + width * yp;
              if (ooz > z[idx]) {
                  z[idx] = ooz;
                  b[idx] = p.label;
              }
          }
        });
        
        // Connecting rungs
        if (Math.abs(y_pos % 3.0) < 0.1) {
            for (let t = -radius; t < radius; t += 0.5) {
                const rx = t * Math.cos(theta);
                const rz = t * Math.sin(theta);
                
                const oozR = 1 / (rz + 40);
                const xpR = Math.floor(width / 2 + rx * oozR * 90);
                const ypR = Math.floor(height / 2 + y_pos * 1.5 * oozR * 40);
                
                if (xpR >= 0 && xpR < width && ypR >= 0 && ypR < height) {
                    const idx = xpR + width * ypR;
                    if (oozR > z[idx]) {
                        z[idx] = oozR;
                        const intensity = Math.floor(((rz + radius) / (2 * radius)) * (chars.length - 1));
                        b[idx] = chars[Math.max(0, Math.min(chars.length - 1, intensity))];
                    }
                }
            }
        }
    }

    let output = "";
    for (let k = 0; k < width * height; k++) {
      output += b[k] + (k % width === width - 1 ? "\n" : "");
    }
    return output;
  };

  return (
    <pre className="text-[5px] xs:text-[6px] sm:text-[8px] md:text-[10px] leading-[1.1] font-mono text-stone-500 select-none transition-colors duration-700 hover:text-stone-300">
      {renderHelix(frame)}
    </pre>
  );
}
