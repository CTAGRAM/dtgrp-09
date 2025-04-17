
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/EWguK7diCfo2C7OJ/scene.splinecode')
      .catch(console.error);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas3d"
      className="w-full h-full absolute inset-0 -z-10"
    />
  );
};

export default SplineScene;
