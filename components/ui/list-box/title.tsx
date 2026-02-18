type OwnProps = {
  children: React.ReactNode;
};

type PolymorphicProps<E extends React.ElementType> = OwnProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof OwnProps> & {
    as?: E;
  };

type Props<E extends React.ElementType = "h2"> = PolymorphicProps<E>;

export function Title<E extends React.ElementType = "h2">({
  as,
  className,
  children,
}: Props<E>) {
  const Component = as ?? "h2";

  return (
    <Component
      data-slot="list-box-title"
      className={`flex items-center font-bold group-not-has-data-[slot=list-box-description]:row-span-2 ${className}`}
    >
      {children}
    </Component>
  );
}
