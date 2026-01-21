import { useIsMobile } from "@/core/hooks/use-is-mobile";
import { ChevronLeft } from "lucide-react";
import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

type SidebarPanelProps = {
  children: React.ReactNode;
};

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function Sidebar({ open: isOpen, onToggle, children }: SidebarProps) {
  const isMobile = useIsMobile();

  function toggleSidebar() {
    if (!isMobile) return;
    onToggle();
  }

  return (
    <SidebarContext value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext>
  );
}

Sidebar.Panel = function SidebarPanel({ children }: SidebarPanelProps) {
  const context = useContext(SidebarContext);
  const isMobile = useIsMobile();
  if (!context) return null;
  const { isOpen } = context;

  return (
    <aside
      className={`inset-0 z-5 min-h-dvh bg-(--sidebar-bg) px-1 transition-transform ${!isOpen && isMobile ? "translate-x-[-100dvw]" : ""} ${isMobile ? "fixed" : "static"}`}
    >
      {children}
    </aside>
  );
};

Sidebar.ToggleButton = function ToggleButton() {
  const context = useContext(SidebarContext);
  const isMobile = useIsMobile();
  const { t } = useTranslation("arias");
  if (!context) return null;
  const { toggleSidebar } = context;

  if (isMobile)
    return (
      <button
        aria-label={t("sidebar.toggle-button")}
        title={t("sidebar.toggle-button")}
        className="cursor-pointer"
        onClick={toggleSidebar}
      >
        <ChevronLeft />
      </button>
    );
};
