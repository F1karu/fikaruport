// components/TypedWrapper.tsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedWrapperProps {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
}

export const TypedWrapper: React.FC<TypedWrapperProps> = ({ strings, typeSpeed, backSpeed, loop }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      typedInstance.current = new Typed(elementRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        showCursor: false, // Nonaktifkan kursor bawaan
      });
    }

    return () => {
      typedInstance.current?.destroy(); // Bersihkan instance saat komponen dilepas
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return (
    <div className="typed-container">
      <span ref={elementRef}></span>
      <span className="typed-cursor">|</span>
    </div>
  );
};
export default TypedWrapper;