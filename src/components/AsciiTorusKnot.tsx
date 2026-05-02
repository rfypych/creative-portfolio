import { useState, useEffect } from 'react';

/**
 * A rotating 3D ASCII Torus Knot.
 * Represents complex global connectivity.
 */
export default function AsciiTorusKnot() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderKnot = (f: number) => {
    const angleX = f * 0.03;
    const angleY = f * 0.05;
    const width = 100;
    const height = 70;
    const b = new Array(width * height).fill(" ");
    const z = new Array(width * height).fill(-100);
    
    const chars = " .:-=+*#%@";
    
    // Torus knot parameters (p=2, q=3 is a common trefoil-like knot)
    const p = 2;
    const q = 3;
    const radius = 16;
    const tubeRadius = 5;

    for (let t = 0; t < 2 * Math.PI; t += 0.02) {
      const r = radius + tubeRadius * Math.cos(q * t);
      const px = r * Math.cos(p * t);
      const py = r * Math.sin(p * t);
      const pz = tubeRadius * Math.sin(q * t);

      // Rotation X
      let y1 = py * Math.cos(angleX) - pz * Math.sin(angleX);
      let z1 = py * Math.sin(angleX) + pz * Math.cos(angleX);
      let x1 = px;

      // Rotation Y
      let x2 = x1 * Math.cos(angleY) + z1 * Math.sin(angleY);
      let z2 = -x1 * Math.sin(angleY) + z1 * Math.cos(angleY);
      let y2 = y1;

      // Projection
      const ooz = 1 / (z2 + 60);
      const xp = Math.floor(width / 2 + x2 * ooz * 100);
      const yp = Math.floor(height / 2 + y2 * ooz * 50);

      if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
        const idx = xp + width * yp;
        if (ooz > z[idx]) {
          z[idx] = ooz;
          const intensity = Math.floor(((z2 + radius) / (2 * radius)) * (chars.length - 1));
          b[idx] = chars[Math.max(0, Math.min(chars.length - 1, intensity))];
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
    <pre className="text-[4px] xs:text-[5px] sm:text-[7px] md:text-[9px] leading-none font-mono text-stone-600 select-none group-hover:text-stone-300 transition-colors duration-1000">
      {renderKnot(frame)}
    </pre>
  );
}
