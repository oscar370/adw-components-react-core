import { ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../sidebar";

type HeaderBarProps = {
  title: string;
  isSubPage?: boolean;
  backTo?: string;
};

export function HeaderBar({ title, isSubPage, backTo }: HeaderBarProps) {
  return (
    <header>
      <nav>
        <ul className="grid h-full min-h-8 w-full grid-cols-3 items-center justify-center">
          <li className="flex items-center">
            {isSubPage ? (
              <BackButton backTo={backTo} />
            ) : (
              <Sidebar.ToggleButton />
            )}
          </li>

          <li className="col-end-3 flex items-center justify-center leading-0">
            <h1> {title} </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
}

type BackButtonProps = {
  backTo?: string;
};

function BackButton({ backTo }: BackButtonProps) {
  const navigate = useNavigate();
  const { t } = useTranslation("arias");
  return (
    <button
      aria-label={t("header-bar.back-button")}
      title={t("header-bar.back-button")}
      className="cursor-pointer"
      onClick={() => navigate(backTo ? backTo : "..", { replace: true })}
    >
      <ChevronLeft />
    </button>
  );
}
