import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

type AnimatedRoutesProps = {
  children: React.ReactNode;
};

export function AnimatedRoutes({ children }: AnimatedRoutesProps) {
  const location = useLocation();
  const direction = useNavDirection();
  console.log(direction);

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}

function useNavDirection() {
  const location = useLocation();
  const [prevDepth, setPrevDepth] = useState(0);
  const currentDepth = location.pathname.split("/").filter(Boolean).length;

  const direction = (() => {
    if (currentDepth === prevDepth) {
      return "lateral";
    }
    if (currentDepth > prevDepth) {
      return "forward";
    }
    return "backward";
  })();

  useEffect(() => {
    setPrevDepth(currentDepth);
  }, [currentDepth]);

  return direction;
}
