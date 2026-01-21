import { motion } from "motion/react";
import { useNavigationType } from "react-router-dom";
import { HeaderBar } from "../header-bar";

type NavigationPage = {
  title: string;
  isSubPage?: boolean;
  children: React.ReactNode;
};

export function NavigationPage({
  title,
  isSubPage = false,
  children,
}: NavigationPage) {
  const navType = useNavigationType();

  const variants = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: navType === "POP" ? "100%" : "-100%",
      opacity: 0,
    },
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        variants={variants}
        initial={isSubPage ? "initial" : undefined}
        animate={isSubPage ? "animate" : undefined}
        exit={isSubPage ? "exit" : undefined}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.25,
        }}
      >
        <HeaderBar title={title} isSubPage={isSubPage} />
        <main className="mx-auto max-w-150 px-1 pb-1">{children}</main>
      </motion.div>
    </div>
  );
}
