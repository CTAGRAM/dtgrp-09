
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/VJ3Gg1Hb9GPqaNVV/scene.splinecode');
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      id="canvas3d"
    />
  );
};

export default SplineBackground;
