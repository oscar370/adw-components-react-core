import clsx from "clsx";
import { Link } from "react-router-dom";

type ClickEvent = React.MouseEvent<HTMLElement>;

type CommonProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  accent?: string;
  property?: boolean;
  children?: React.ReactNode;
};

type AsDiv = {
  as?: "div";
  onClick?: never;
  href?: never;
  to?: never;
  isActive?: never;
};

type AsButton = {
  as: "button";
  onClick: (e?: ClickEvent) => void;
  href?: never;
  to?: never;
  isActive?: never;
};

type AsAnchor = {
  as: "a";
  href: string;
  to?: never;
  isActive?: boolean;
  onClick?: (e?: ClickEvent) => void;
};

type AsLink = {
  as: typeof Link;
  href?: never;
  to: string;
  isActive?: boolean;
  onClick?: (e?: ClickEvent) => void;
};

type ActionRowProps =
  | (CommonProps & AsDiv)
  | (CommonProps & AsButton)
  | (CommonProps & AsAnchor)
  | (CommonProps & AsLink);

export function ActionRow({
  title,
  subtitle,
  icon: Icon,
  accent,
  property,
  as: Component = "div",
  isActive,
  onClick,
  href,
  to,
  children,
}: ActionRowProps) {
  const isInteractive =
    Component === "button" || Component === "a" || Component === Link;

  const componentProps: any = {
    className: clsx(
      "flex min-h-13 w-full items-center px-4 transition-colors",
      isInteractive && !isActive && "cursor-pointer hover:bg-(--hover)",
      isActive && "bg-(--active)",
      !isInteractive && "select-text",
    ),
    "aria-current": isActive ? "page" : undefined,
    onClick,
  };

  if (Component === Link && to) {
    componentProps.to = to;
  } else if (Component === "a" && href) {
    componentProps.href = href;
  }

  const iconClasses = clsx("mr-2", accent ? accent : "text-(--accent)");
  const titleClasses = clsx(
    property ? "mb-0.5 text-sm text-(--dim-fg)" : "leading-tight",
  );
  const subtitleClasses = clsx(
    !property ? "mt-0.5 text-sm text-(--dim-fg)" : "leading-tight",
  );

  return (
    <li>
      <Component {...componentProps}>
        {Icon && (
          <div aria-hidden="true" className={iconClasses}>
            {Icon}
          </div>
        )}

        <div className="min-w-0 flex-1 text-left">
          <p className={titleClasses}>{title}</p>
          {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </div>

        <div className="ml-4 flex items-center">{children}</div>
      </Component>
    </li>
  );
}
