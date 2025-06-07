type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
