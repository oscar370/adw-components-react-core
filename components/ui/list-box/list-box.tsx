import { Content } from "./content";
import { Description } from "./description";
import { Header } from "./header";
import { HeaderAction } from "./header-action";
import { Root } from "./root";
import { Title } from "./title";

type ListBoxOwnProps = {
  title?: string;
  description?: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = ListBoxOwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ListBoxOwnProps> & {
    as?: E;
  };

type ListBoxProps<E extends React.ElementType = "section"> =
  PolymorphicProps<E>;

export function ListBox<E extends React.ElementType = "section">({
  title,
  description,
  as,
  headerAction,
  children,
  className,
  ...props
}: ListBoxProps<E>) {
  const Component = as || "section";
  const isNav = Component === "nav";
  const shouldRenderHeader =
    title || description || headerAction ? true : false;

  return (
    <Component className={`w-full ${className}`} {...props}>
      {shouldRenderHeader && (
        <header className="mb-1 flex items-center px-1">
          <div className="flex-1">
            {title && <h2 className="font-bold">{title}</h2>}

            {description && (
              <p className="text-dim-foreground mb-1 text-xs">{description}</p>
            )}
          </div>
          {headerAction && headerAction}
        </header>
      )}

      <ul
        className={
          !isNav
            ? "divide-border bg-card-background w-full divide-y overflow-hidden rounded-xl p-0 shadow-sm"
            : "space-y-1 overflow-y-auto [&>li>a]:rounded-xl [&>li>button]:rounded-xl"
        }
      >
        {children}
      </ul>
    </Component>
  );
}

ListBox.Root = Root;
ListBox.Header = Header;
ListBox.HeaderAction = HeaderAction;
ListBox.Title = Title;
ListBox.Description = Description;
ListBox.Content = Content;
