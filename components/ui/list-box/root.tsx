type OwnProps = {
  title?: string;
  description?: string;
  headerButton?: React.ReactNode;
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "section"> = PolymorphicProps<E>;

export function Root<E extends React.ElementType = "section">({
  as,
  children,
  className,
  ...props
}: Props<E>) {
  const Component = as ?? "section";

  return (
    <Component className={`w-full ${className}}`} {...props}>
      {children}
    </Component>
  );
}
