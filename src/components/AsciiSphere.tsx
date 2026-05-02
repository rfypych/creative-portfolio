import { useState, useEffect } from 'react';

/**
 * A rotating 3D ASCII Sphere.
 * Represents the global perspective and unity of 'The Collective'.
 */
export default function AsciiSphere() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderSphere = (f: number) => {
    const width = 80;
    const height = 40;
    const b = new Array(width * height).fill(" ");
    const z = new Array(width * height).fill(0);
    
    // Smooth charset
    const chars = " .:-=+*#%@";
    
    const r = 15;
    const A = f * 0.05; // Rotation speed
    const B = f * 0.03;

    for (let theta = 0; theta < Math.PI; theta += 0.07) {
      for (let phi = 0; phi < 2 * Math.PI; phi += 0.03) {
        // Sphere coordinates
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z0 = r * Math.cos(theta);

        // Rotation
        const x1 = x * Math.cos(B) - y * Math.sin(B);
        const y1 = x * Math.sin(B) + y * Math.cos(B);
        const z1 = z0;

        const x2 = x1;
        const y2 = y1 * Math.cos(A) - z1 * Math.sin(A);
        const z2 = y1 * Math.sin(A) + z1 * Math.cos(A);

        const ooz = 1 / (z2 + 40);
        const xp = Math.floor(width / 2 + x2 * ooz * 60);
        const yp = Math.floor(height / 2 + y2 * ooz * 30);

        if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
          const idx = xp + width * yp;
          if (ooz > z[idx]) {
            z[idx] = ooz;
            // Shading based on z coordinate for depth
            const intensity = Math.floor(((z2 + r) / (2 * r)) * (chars.length - 1));
            b[idx] = chars[intensity];
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
    <pre className="text-[3px] xs:text-[4px] sm:text-[5px] md:text-[8px] leading-none font-mono text-stone-700 select-none group-hover:text-stone-400 transition-colors duration-700 opacity-60">
      {renderSphere(frame)}
    </pre>
  );
}
