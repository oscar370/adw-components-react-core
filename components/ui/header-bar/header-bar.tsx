import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../sidebar";

type HeaderBarProps = {
  title: string;
  isSubPage?: boolean;
};

export function HeaderBar({ title, isSubPage }: HeaderBarProps) {
  const { t } = useTranslation("arias");
  return (
    <header className="py-2">
      <nav className="grid grid-cols-3">
        <ul className="px-1">
          <li>{isSubPage ? <BackButton /> : <Sidebar.ToggleButton />}</li>
        </ul>

        <ul className="col-end-3 text-center">
          <li>
            <span aria-labelledby={t("header-bar.title")}> {title} </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function BackButton() {
  const navigate = useNavigate();
  const { t } = useTranslation("arias");
  return (
    <button
      aria-label={t("header-bar.back-button")}
      title={t("header-bar.back-button")}
      className="cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <ChevronLeft />
    </button>
  );
}
