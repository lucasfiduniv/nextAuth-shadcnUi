"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="focus:outline-none bg-gray-200 rounded-full p-1 flex items-center justify-center w-10 h-10 transition-colors duration-300"
    >
      {theme === "dark" ? (
       <IoSunnySharp className="text-yellow-400" />
      ) : (
        <IoMoon className="text-gray-600" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
