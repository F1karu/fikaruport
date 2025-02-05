import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    // Particle effect logic can be added here.
    // For example, DOM manipulation to create particle effects dynamically.

    const RANDOM = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const PARTICLES = document.querySelectorAll(".particle");
    PARTICLES.forEach((P: Element) => {
      P.setAttribute(
        "style",
        `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
      `
      );
    });
  }, []);

  return (
    <div className="particle-container">
      {[...Array(8)].map((_, index) => (
        <svg
          key={index}
          className="particle"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
        </svg>
      ))}
    </div>
  );
};

export default Particles;
