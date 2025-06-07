import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 mt-8">
      <Link
        href="/"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Blog
      </Link>
    </h2>
  );
};

export default Header;
