import { motion, usePresenceData } from "motion/react";
import { HeaderBar } from "../header-bar";

type NavigationPageProps = {
  title: string;
  isSubPage?: boolean;
  children: React.ReactNode;
};

export function NavigationPage({
  title,
  isSubPage = false,
  children,
}: NavigationPageProps) {
  const isForward = usePresenceData() as boolean;

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        variants={{
          initial: {
            x: isForward ? "100%" : "0%",
            zIndex: isForward ? 0 : 2,
          },
          animate: {
            x: "0%",
            zIndex: 1,
          },
          exit: {
            x: isForward ? "0%" : "100%",
            zIndex: isForward ? 2 : 0,
          },
        }}
        initial={isSubPage ? "initial" : false}
        animate={isSubPage ? "animate" : false}
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
