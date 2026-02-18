type OwnProps = {
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "header"> = PolymorphicProps<E>;

export function Header<E extends React.ElementType = "header">({
  as,
  className,
  children,
}: Props<E>) {
  const Component = as ?? "header";

  return (
    <Component
      data-slot="list-box-header"
      className={`group mb-1 grid px-1 has-data-[slot=list-box-header-action]:grid-cols-[1fr_auto] ${className}`}
    >
      {children}
    </Component>
  );
}
