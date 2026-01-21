import { AnimatePresence } from "motion/react";
import { Routes, useLocation } from "react-router-dom";

type AnimatedRoutesProps = {
  children: React.ReactNode;
};

export function AnimatedRoutes({ children }: AnimatedRoutesProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}
