import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <Input type="email" label="Email" placeholder="Seu email" required />
        </div>
        <div className="mb-6">
          <Input type="password" label="Senha" placeholder="Sua senha" required />
        </div>
        <Button type="submit" variant="primary" className="w-full">
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
