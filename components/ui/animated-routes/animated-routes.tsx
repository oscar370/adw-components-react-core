import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Routes, useLocation } from "react-router-dom";

type AnimatedRoutesProps = {
  children: React.ReactNode;
};

export function AnimatedRoutes({ children }: AnimatedRoutesProps) {
  const location = useLocation();
  const isForward = useForward();

  return (
    <AnimatePresence mode="popLayout" custom={isForward}>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}

function useForward() {
  const location = useLocation();
  const [depths, setDepths] = useState({ prev: 0, current: 0 });

  const currentDepth = location.pathname.split("/").filter(Boolean).length;

  if (currentDepth !== depths.current) {
    setDepths({ prev: depths.current, current: currentDepth });
  }

  const isForward = depths.prev === 0 ? true : depths.current >= depths.prev;

  return isForward;
}
