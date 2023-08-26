"use client";
import { useEffect, useRef } from "react";

export default function GlowWrapper({
  children,
  opacity,
}: {
  children: React.ReactNode;
  opacity: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLDivElement | null>(null);

  const mouseMoveEvent = (e: MouseEvent) => {
    if (
      containerRef.current &&
      pointerRef.current &&
      window.innerWidth > 1024
    ) {
      const { x, y } = containerRef.current.getBoundingClientRect();

      pointerRef.current.style.setProperty(
        "background",
        `radial-gradient(circle 192px at 50%, rgba(255, 255, 255, ${opacity}) 0, rgba(0, 0, 0, 0) 100%)`
      );

      pointerRef.current.style.setProperty(
        "transform",
        `translate(-50%, -50%)`
      );

      pointerRef.current.style.setProperty("left", `${e.clientX - x}px`);
      pointerRef.current.style.setProperty("top", `${e.clientY - y}px`);
      pointerRef.current.style.opacity = "1";
      pointerRef.current.style.transition = "opacity 0.5s";
    }
  };

  const mouseLeaveEvent = (e: MouseEvent) => {
    if (pointerRef.current) {
      pointerRef.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", mouseMoveEvent);
      container.addEventListener("mouseleave", mouseLeaveEvent);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", mouseMoveEvent);
        container.removeEventListener("mouseleave", mouseLeaveEvent);
      }
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className='relative overflow-hidden z-10'>
      {children}
      <div
        className='absolute w-96 h-96 pointer-events-none'
        ref={pointerRef}
      ></div>
    </div>
  );
}
