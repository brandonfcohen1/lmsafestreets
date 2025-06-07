import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-8">
      {children}
    </h1>
  );
}
