
import * as animeLib from 'animejs';
const anime = animeLib.default || animeLib;

export const animatePathDrawing = (path: SVGPathElement, duration: number = 2000) => {
  return anime({
    targets: path,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration,
    autoplay: false
  });
};

export const animateFloat = (element: HTMLElement, intensity: number = 10) => {
  return anime({
    targets: element,
    translateY: [0, -intensity, 0],
    duration: 3000,
    easing: 'easeInOutQuad',
    loop: true,
    autoplay: true
  });
};

export const animateGlow = (element: HTMLElement, scale: number = 1.1) => {
  return anime({
    targets: element,
    scale: [1, scale, 1],
    opacity: [0.8, 1, 0.8],
    easing: 'easeInOutSine',
    duration: 1500,
    loop: true
  });
};

export const animateTruck = (
  truck: HTMLElement, 
  path: Array<{x: number, y: number}>, 
  progress: number
) => {
  // Calculate the position on the path based on progress (0-1)
  const pathIndex = Math.min(
    Math.floor(progress * (path.length - 1)),
    path.length - 2
  );
  
  const pathSegmentProgress = (progress * (path.length - 1)) % 1;
  
  const currentPoint = path[pathIndex];
  const nextPoint = path[pathIndex + 1];
  
  const x = currentPoint.x + (nextPoint.x - currentPoint.x) * pathSegmentProgress;
  const y = currentPoint.y + (nextPoint.y - currentPoint.y) * pathSegmentProgress;
  
  // Calculate rotation based on direction of movement
  const dx = nextPoint.x - currentPoint.x;
  const dy = nextPoint.y - currentPoint.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  anime({
    targets: truck,
    left: `${x}%`,
    top: `${y}%`,
    rotate: angle,
    easing: 'easeOutExpo',
    duration: 800
  });
};

export const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
  let obj = { count: 0 };
  
  return anime({
    targets: obj,
    count: target,
    round: 1,
    easing: 'linear',
    duration: duration,
    update: () => {
      element.innerHTML = obj.count.toString();
    }
  });
};

export const animateRipple = (container: HTMLElement, x: number, y: number) => {
  const ripple = document.createElement('div');
  ripple.className = 'absolute bg-primary/20 rounded-full pointer-events-none';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  
  container.appendChild(ripple);
  
  anime({
    targets: ripple,
    scale: [0, 5],
    opacity: [0.8, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    complete: () => {
      if (container.contains(ripple)) {
        container.removeChild(ripple);
      }
    }
  });
};
