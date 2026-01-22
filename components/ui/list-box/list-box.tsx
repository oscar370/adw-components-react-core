type ListBoxProps = {
  title?: string;
  description?: string;
  headerButton?: React.ReactNode;
  children: React.ReactNode;
  as?: "section" | "nav";
};

export function ListBox({
  title,
  description,
  as: Component = "section",
  headerButton,
  children,
}: ListBoxProps) {
  const isSection = Component === "section";
  const shouldRenderHeader =
    title || description || headerButton ? true : false;

  return (
    <Component className="mt-4">
      {shouldRenderHeader && (
        <header className="flex items-center px-px">
          <div className="flex-1">
            {title && (
              <h2 className="px-1 font-bold tracking-wider">{title}</h2>
            )}

            {description && (
              <p className="mb-1 px-1 text-xs text-(--dim-fg)">{description}</p>
            )}
          </div>
          {headerButton}
        </header>
      )}

      <ul
        className={
          isSection
            ? "divider-y w-full divide-y divide-(--border) overflow-hidden rounded-xl bg-(--card-bg) p-0 shadow-sm"
            : "space-y-1 overflow-y-auto [&>li>a]:rounded-xl [&>li>button]:rounded-xl"
        }
      >
        {children}
      </ul>
    </Component>
  );
}
