type OwnProps = {
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "div"> = PolymorphicProps<E>;

export function HeaderAction<E extends React.ElementType = "div">({
  as,
  className,
  children,
}: Props<E>) {
  const Component = as ?? "div";

  return (
    <Component
      data-slot="list-box-header-action"
      className={`row-span-2 flex items-center ${className}`}
    >
      {children}
    </Component>
  );
}
