type OwnProps = {
  variant?: "default" | "nav";
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "ul"> = PolymorphicProps<E>;

export function Content<E extends React.ElementType = "ul">({
  as,
  variant = "default",
  className,
  children,
}: Props<E>) {
  const Component = as ?? "ul";

  return (
    <Component
      data-slot="list-box-content"
      className={`${
        variant === "default"
          ? "divide-border bg-card-background w-full divide-y overflow-hidden rounded-xl p-0 shadow-sm"
          : "space-y-1 overflow-y-auto [&>li>a]:rounded-xl [&>li>button]:rounded-xl"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
