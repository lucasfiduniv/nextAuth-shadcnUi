"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiGithub, FiMail } from "react-icons/fi";
import Link from "next/link";

const Login = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className=" dark:bg-gray-800 p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <Input type="email" placeholder="Seu email" required />
        </div>
        <div className="mb-6">
          <Input type="password" placeholder="Sua senha" required />
        </div>
        <Button type="submit" variant="default" className="w-full">
          Entrar
        </Button>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            Esqueceu sua senha?
          </a>
        </div>
        <div className="mt-8 max-w-md w-full mx-auto flex justify-center">
          <Button variant="default" className="mr-4">
            <FiGithub className="mr-2" /> Login com GitHub
          </Button>
          <Link href="/api/auth/signin">
            <Button variant="default">
              <FiMail className="mr-2" /> Login com Gmail
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
