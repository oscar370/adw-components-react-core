type OwnProps = {
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "p"> = PolymorphicProps<E>;

export function Description<E extends React.ElementType = "p">({
  as,
  className,
  children,
}: Props<E>) {
  const Component = as ?? "p";

  return (
    <Component
      data-slot="list-box-description"
      className={`text-dim-foreground row-end-3 mb-1 text-xs ${className}`}
    >
      {children}
    </Component>
  );
}
