import { useState, useEffect } from 'react';

/**
 * A rotating 3D ASCII Cube.
 * Represents structural stability and the foundation of the archive.
 */
export default function AsciiCube() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderCube = (f: number) => {
    const angleX = f * 0.04;
    const angleY = f * 0.04;
    const width = 80;
    const height = 50;
    const b = new Array(width * height).fill(" ");
    const z = new Array(width * height).fill(-100);
    
    const chars = " .:-=+*#%@";
    const size = 10;

    // Cube vertices
    const points = [];
    for (let x = -size; x <= size; x += 1.5) {
      for (let y = -size; y <= size; y += 1.5) {
        points.push([x, y, size]);
        points.push([x, y, -size]);
        points.push([x, size, y]);
        points.push([x, -size, y]);
        points.push([size, x, y]);
        points.push([-size, x, y]);
      }
    }

    points.forEach((p) => {
      const px = p[0];
      const py = p[1];
      const pz = p[2];

      // Rotation X
      let y1 = py * Math.cos(angleX) - pz * Math.sin(angleX);
      let z1 = py * Math.sin(angleX) + pz * Math.cos(angleX);
      let x1 = px;

      // Rotation Y
      let x2 = x1 * Math.cos(angleY) + z1 * Math.sin(angleY);
      let z2 = -x1 * Math.sin(angleY) + z1 * Math.cos(angleY);
      let y2 = y1;

      // Projection
      const ooz = 1 / (z2 + 40);
      const xp = Math.floor(width / 2 + x2 * ooz * 70);
      const yp = Math.floor(height / 2 + y2 * ooz * 35);

      if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
        const idx = xp + width * yp;
        if (ooz > z[idx]) {
          z[idx] = ooz;
          const intensity = Math.floor(((z2 + size) / (2 * size)) * (chars.length - 1));
          b[idx] = chars[Math.max(0, Math.min(chars.length - 1, intensity))];
        }
      }
    });

    let output = "";
    for (let k = 0; k < width * height; k++) {
      output += b[k] + (k % width === width - 1 ? "\n" : "");
    }
    return output;
  };

  return (
    <pre className="text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] leading-none font-mono text-stone-600 select-none group-hover:text-stone-300 transition-colors duration-1000">
      {renderCube(frame)}
    </pre>
  );
}
